const { Jimp } = require('jimp');
const fs = require('fs');

async function processJimena() {
  const frontImg = await Jimp.read('models/jimena_front.jpg');
  const w = frontImg.width;
  const h = frontImg.height;

  // 1. Create transparent Jimena Front
  // Let's create an RGBA buffer where black background is transparent
  const frontClean = frontImg.clone();

  // Threshold: if r, g, b are all below 18, it's black background
  // Also perform a 1-pixel soft blend on the boundary for anti-aliasing
  const isBg = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return true;
    const idx = (y * w + x) * 4;
    const r = frontImg.bitmap.data[idx];
    const g = frontImg.bitmap.data[idx + 1];
    const b = frontImg.bitmap.data[idx + 2];
    return (r < 18 && g < 18 && b < 18);
  };

  frontClean.scan(0, 0, w, h, (x, y, idx) => {
    const r = frontClean.bitmap.data[idx];
    const g = frontClean.bitmap.data[idx + 1];
    const b = frontClean.bitmap.data[idx + 2];

    if (r < 18 && g < 18 && b < 18) {
      frontClean.bitmap.data[idx + 3] = 0; // Transparent
    } else {
      // Check if neighboring pixels are background to do edge softening
      let bgNeighbors = 0;
      if (isBg(x - 1, y)) bgNeighbors++;
      if (isBg(x + 1, y)) bgNeighbors++;
      if (isBg(x, y - 1)) bgNeighbors++;
      if (isBg(x, y + 1)) bgNeighbors++;

      if (bgNeighbors > 0) {
        frontClean.bitmap.data[idx + 3] = Math.round(255 * (1 - bgNeighbors * 0.2));
      } else {
        frontClean.bitmap.data[idx + 3] = 255;
      }
    }
  });

  await frontClean.write('models/jimena_front.png');
  console.log('Saved models/jimena_front.png');

  // 2. Create Jimena Back
  // The back view shares the EXACT silhouette, height, width, sleeves, skirt, legs, socks and shoes!
  const backClean = frontClean.clone();

  // Let's mirror horizontally so left sleeve becomes left sleeve from behind, etc.
  // Wait, when a person is seen from behind:
  // Her right arm in front view (viewer's left) becomes her right arm from behind (viewer's right)!
  // So mirroring horizontally matches natural 360-degree rotation around the Y-axis!
  backClean.flip({ horizontal: true, vertical: false });

  // Now, what changes on the back view?
  // A) Hair: Her long brown hair covers the back of the head and falls over the nape of the neck down to ~Y: 300.
  // In the front view, the face is at Y: 85..220, X: ~310..375.
  // From behind, that whole central oval is covered by her brown hair!
  // B) Upper torso: In front, she has the white shirt collar and navy vest (Y: 220..460).
  // From behind, her grey hooded jacket covers the back! The grey hoodie has a relaxed hood sitting on the upper back (Y: 220..310) and smooth grey sweatshirt fabric across the back (Y: 290..465).
  // C) Skirt: In front, the pleated skirt has navy pleats. From behind, it continues seamlessly as pleated navy skirt.
  // D) Legs: In front, kneecaps at Y: 680..720. From behind, soft popliteal calf shading.
  // E) Shoes: In front, laces at front. From behind, smooth silver leather heel cup with white rubber base.

  // Let's sample hair texture from the top and sides of Jimena's hair
  const hairSamples = [];
  for (let y = 60; y < 140; y += 4) {
    for (let x = 270; x < 310; x += 4) {
      const idx = (y * w + x) * 4;
      if (frontImg.bitmap.data[idx + 3] > 100) {
        hairSamples.push({
          r: frontImg.bitmap.data[idx],
          g: frontImg.bitmap.data[idx + 1],
          b: frontImg.bitmap.data[idx + 2]
        });
      }
    }
  }

  // Grey hoodie texture samples
  const greySamples = [];
  for (let y = 300; y < 420; y += 4) {
    for (let x = 220; x < 265; x += 4) {
      const idx = (y * w + x) * 4;
      if (frontImg.bitmap.data[idx + 3] > 100) {
        greySamples.push({
          r: frontImg.bitmap.data[idx],
          g: frontImg.bitmap.data[idx + 1],
          b: frontImg.bitmap.data[idx + 2]
        });
      }
    }
  }

  console.log(`Sampled ${hairSamples.length} hair pixels and ${greySamples.length} grey jacket pixels`);

  const centerX = Math.round(w / 2);

  // Apply back transformations:
  backClean.scan(0, 0, w, h, (x, y, idx) => {
    // Only modify pixels that are inside the body silhouette (alpha > 0)
    if (backClean.bitmap.data[idx + 3] < 30) return;

    const dx = x - centerX;

    // 1. HEAD & HAIR (Y from 30 to 295)
    // Head width roughly +/- 75px
    if (y >= 40 && y <= 295 && Math.abs(dx) <= 75) {
      // Natural hair flow from top to mid-back
      // Hair gets slightly darker towards the nape
      const progress = (y - 40) / 255;
      const wave = Math.sin((x + y * 0.5) * 0.15) * 12;
      const strandIdx = Math.abs(Math.round((x * 7 + y * 13) % hairSamples.length));
      const baseHair = hairSamples[strandIdx] || { r: 130, g: 85, b: 65 };

      // Highlight in the middle, softer towards edges
      const highlight = Math.exp(-Math.pow(dx / 35, 2)) * 18 * (1 - progress * 0.5);

      const r = Math.min(255, Math.max(0, baseHair.r + wave + highlight - progress * 15));
      const g = Math.min(255, Math.max(0, baseHair.g + wave + highlight * 0.8 - progress * 15));
      const b = Math.min(255, Math.max(0, baseHair.b + wave + highlight * 0.6 - progress * 15));

      backClean.bitmap.data[idx] = r;
      backClean.bitmap.data[idx + 1] = g;
      backClean.bitmap.data[idx + 2] = b;
    }

    // 2. GREY HOODIE BACK (Y from 225 to 470)
    // Between the sleeves (X: ~270 to ~415, dx: ~ -70 to +70)
    // In front, this area had the white collar and navy sweater vest
    if (y >= 225 && y <= 470 && Math.abs(dx) <= 78) {
      // If covered by hair (hair falls to Y: ~290 in the center), skip
      const hairLength = 295 - Math.pow(dx / 50, 2) * 40;
      if (y < hairLength) {
        // Already colored by hair above
        return;
      }

      // Grey hoodie fabric
      const sampleIdx = Math.abs(Math.round((x * 11 + y * 17) % greySamples.length));
      const baseGrey = greySamples[sampleIdx] || { r: 205, g: 202, b: 200 };

      // Add soft hoodie seam and hood contour
      // Hood resting on upper back: a gentle U-shape around Y: 290..340
      const hoodCenterY = 325;
      const hoodCurve = Math.pow(dx / 45, 2) * 25;
      const distToHoodEdge = Math.abs(y - (hoodCenterY + hoodCurve));

      let shade = 0;
      if (y >= 285 && y <= 350) {
        // Inside hood fold: soft shadow
        shade = -12 + (y - 285) * 0.15;
        if (distToHoodEdge < 3) {
          shade = -25; // Hood rim seam
        }
      }

      // Soft back spine furrow shadow
      const spineShadow = Math.exp(-Math.pow(dx / 15, 2)) * -8;

      const r = Math.min(255, Math.max(0, baseGrey.r + shade + spineShadow));
      const g = Math.min(255, Math.max(0, baseGrey.g + shade + spineShadow));
      const b = Math.min(255, Math.max(0, baseGrey.b + shade + spineShadow));

      backClean.bitmap.data[idx] = r;
      backClean.bitmap.data[idx + 1] = g;
      backClean.bitmap.data[idx + 2] = b;
    }

    // 3. SHOE HEELS (Y from 880 to 977)
    // Behind shoes: no laces, smooth silver/metallic heel counter and rubber sole
    if (y >= 880 && y <= 940) {
      // Smooth out laces into metallic silver leather
      const currR = backClean.bitmap.data[idx];
      const currG = backClean.bitmap.data[idx + 1];
      const currB = backClean.bitmap.data[idx + 2];

      // Silver sneaker tone
      const avg = (currR + currG + currB) / 3;
      if (avg > 140) {
        backClean.bitmap.data[idx] = Math.round(avg * 0.95);
        backClean.bitmap.data[idx + 1] = Math.round(avg * 0.95);
        backClean.bitmap.data[idx + 2] = Math.round(avg * 0.95);
      }
    }
  });

  await backClean.write('models/jimena_back.png');
  console.log('Saved models/jimena_back.png successfully!');
}

processJimena().catch(console.error);
