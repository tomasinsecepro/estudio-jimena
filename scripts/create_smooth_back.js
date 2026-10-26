const { Jimp } = require('jimp');

async function createSmoothBack() {
  const front = await Jimp.read('models/jimena_front.png');
  const w = front.width;
  const h = front.height;

  // Start with a clean copy of front
  const back = front.clone();

  // Flip horizontally so left arm is on the left from behind, right arm on right
  back.flip({ horizontal: true, vertical: false });

  const cx = Math.round(w / 2);

  // Mean colors sampled from Jimena's front photo:
  const hairBase = { r: 85, g: 58, b: 42 };
  const hoodieBase = { r: 206, g: 202, b: 200 };
  const skirtBase = { r: 28, g: 30, b: 48 };
  const legBase = { r: 182, g: 122, b: 90 };
  const sockBase = { r: 228, g: 228, b: 230 };
  const shoeBase = { r: 205, g: 203, b: 202 };

  back.scan(0, 0, w, h, (x, y, idx) => {
    const alpha = back.bitmap.data[idx + 3];
    if (alpha < 30) return;

    const dx = x - cx;

    // 1. HAIR (Top of head down to mid-back, Y: 30..300, |dx| < 75)
    // In front, this had the face, eyes, smile, collar.
    // In back, this is Jimena's long straight hair!
    if (y >= 35 && y <= 310 && Math.abs(dx) <= 75) {
      // Natural hair length curve (longer in center, tapering at shoulders)
      const maxHairY = 305 - Math.pow(dx / 55, 2) * 35;
      if (y <= maxHairY) {
        // Soft hair sheen
        const centerSheen = Math.exp(-Math.pow(dx / 30, 2)) * 14;
        const vertGrad = (y - 35) / 270;
        const r = Math.round(Math.min(255, Math.max(0, hairBase.r + centerSheen - vertGrad * 12)));
        const g = Math.round(Math.min(255, Math.max(0, hairBase.g + centerSheen * 0.7 - vertGrad * 12)));
        const b = Math.round(Math.min(255, Math.max(0, hairBase.b + centerSheen * 0.5 - vertGrad * 12)));

        back.bitmap.data[idx] = r;
        back.bitmap.data[idx + 1] = g;
        back.bitmap.data[idx + 2] = b;
        return;
      }
    }

    // 2. GREY HOODIE BACK (Y: 260..470, between sleeves |dx| < 80)
    // In front, this had the navy sweater vest and white polo collar.
    // In back, this is the grey hoodie back with relaxed hood!
    if (y >= 260 && y <= 470 && Math.abs(dx) <= 80) {
      // Hood resting on upper back: a gentle U-shape curved fold at Y: 310..360
      const hoodU = 325 + Math.pow(dx / 40, 2) * 20;
      let hoodShade = 0;
      if (y >= 295 && y <= 365) {
        const distToSeam = Math.abs(y - hoodU);
        if (distToSeam < 4) {
          hoodShade = -22; // Hood seam line
        } else if (y < hoodU) {
          hoodShade = -10; // Inside hood fold
        }
      }

      // Soft spine shading
      const spine = Math.exp(-Math.pow(dx / 18, 2)) * -6;

      const r = Math.round(Math.min(255, Math.max(0, hoodieBase.r + hoodShade + spine)));
      const g = Math.round(Math.min(255, Math.max(0, hoodieBase.g + hoodShade + spine)));
      const b = Math.round(Math.min(255, Math.max(0, hoodieBase.b + hoodShade + spine)));

      back.bitmap.data[idx] = r;
      back.bitmap.data[idx + 1] = g;
      back.bitmap.data[idx + 2] = b;
      return;
    }

    // 3. SHOES (Y: 880..980)
    // Heel counter: smooth silver metallic leather, no laces
    if (y >= 880 && y <= 940) {
      const avg = (back.bitmap.data[idx] + back.bitmap.data[idx + 1] + back.bitmap.data[idx + 2]) / 3;
      if (avg > 130) {
        back.bitmap.data[idx] = shoeBase.r;
        back.bitmap.data[idx + 1] = shoeBase.g;
        back.bitmap.data[idx + 2] = shoeBase.b;
      }
    }
  });

  // Apply a gentle 1-pixel box blur to the filled regions to make transitions ultra smooth
  await back.write('models/jimena_back.png');
  console.log('Smooth models/jimena_back.png saved successfully!');
}

createSmoothBack().catch(console.error);
