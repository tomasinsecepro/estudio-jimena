const { Jimp } = require('jimp');
const fs = require('fs');

async function testClosedBody() {
  const img = await Jimp.read('models/jimena_front.png');
  const w = img.width;
  const h = img.height;

  const numSlices = 140;
  const numRadial = 32; // 32 points per semicircle = 64 points full ellipse

  const targetHeight = 150;
  const targetWidth = targetHeight * (w / h); // ~99.9 units
  const halfW = targetWidth / 2;
  const halfH = targetHeight / 2;

  // Extract silhouette for each slice
  const slices = [];
  for (let s = 0; s < numSlices; s++) {
    const v = s / (numSlices - 1); // 0 at top, 1 at bottom
    const py = Math.floor(v * (h - 1));
    const y3D = halfH - v * targetHeight;

    let minPx = w, maxPx = 0, count = 0;
    for (let x = 0; x < w; x++) {
      const a = img.bitmap.data[(py * w + x) * 4 + 3];
      if (a > 25) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
        count++;
      }
    }

    if (count < 5) {
      // Very top or bottom tip: taper to a point
      const prev = slices[slices.length - 1];
      const cxPx = prev ? prev.cxPx : w / 2;
      slices.push({
        y3D,
        minPx: cxPx - 1,
        maxPx: cxPx + 1,
        cxPx,
        width3D: 0.5,
        cx3D: (cxPx / w - 0.5) * targetWidth,
        rx3D: 0.25,
        rz3D: 0.25,
        vTex: 1 - v
      });
    } else {
      const cxPx = (minPx + maxPx) / 2;
      const width3D = ((maxPx - minPx) / w) * targetWidth;
      const cx3D = (cxPx / w - 0.5) * targetWidth;
      const rx3D = width3D / 2;

      // Anatomical depth radius Rz (200% more 3D & rounded)
      let rz3D = rx3D * 0.85;
      if (v < 0.18) {
        // Head: round sphere, Rz = Rx
        rz3D = Math.max(9.5, rx3D * 1.0);
      } else if (v < 0.24) {
        // Neck
        rz3D = Math.max(6.0, rx3D * 0.7);
      } else if (v < 0.46) {
        // Torso / chest / hoodie
        rz3D = Math.max(12.0, rx3D * 0.75);
      } else if (v < 0.63) {
        // Pleated skirt: flaring 3D volume
        rz3D = Math.max(14.0, rx3D * 0.80);
      } else if (v < 0.82) {
        // Thighs / knees
        rz3D = Math.max(7.0, rx3D * 0.70);
      } else if (v < 0.93) {
        // Calves / socks
        rz3D = Math.max(6.0, rx3D * 0.65);
      } else {
        // Shoes: extend forward and backward
        rz3D = Math.max(8.5, rx3D * 0.90);
      }

      slices.push({
        y3D,
        minPx,
        maxPx,
        cxPx,
        width3D,
        cx3D,
        rx3D,
        rz3D,
        vTex: 1 - v
      });
    }
  }

  // Smooth Rz and Rx with a moving average filter so there are NO sharp bumps
  for (let iter = 0; iter < 3; iter++) {
    for (let s = 1; s < numSlices - 1; s++) {
      slices[s].rx3D = (slices[s - 1].rx3D + slices[s].rx3D * 2 + slices[s + 1].rx3D) / 4;
      slices[s].rz3D = (slices[s - 1].rz3D + slices[s].rz3D * 2 + slices[s + 1].rz3D) / 4;
      slices[s].cx3D = (slices[s - 1].cx3D + slices[s].cx3D * 2 + slices[s + 1].cx3D) / 4;
    }
  }

  console.log(`Generated ${slices.length} smooth 3D slices.`);
  console.log('Sample Head slice:', slices[15]);
  console.log('Sample Torso slice:', slices[50]);
  console.log('Sample Skirt slice:', slices[80]);
  console.log('Sample Leg slice:', slices[115]);

  // Save slices as JSON data for fast 3D building in app.js
  fs.writeFileSync('models/jimena_slices.json', JSON.stringify({
    numSlices,
    numRadial,
    targetHeight,
    targetWidth,
    slices
  }));
  console.log('Saved models/jimena_slices.json successfully!');
}

testClosedBody().catch(console.error);
