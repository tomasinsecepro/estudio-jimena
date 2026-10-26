const { Jimp } = require('jimp');
const fs = require('fs');

async function buildPartsData() {
  const front = await Jimp.read('models/jimena_front.png');
  const w = front.width;
  const h = front.height;

  const targetHeight = 150;
  const halfH = targetHeight / 2;

  // Function to convert Y in [0..h-1] to 3D Y in [-halfH..+halfH]
  const yTo3D = (py) => halfH - (py / (h - 1)) * targetHeight;
  const vTex = (py) => 1 - (py / (h - 1));

  // 1. HEAD (py: 32 to 240)
  // X spans from ~265 to ~420
  const headSlices = [];
  for (let py = 32; py <= 240; py += 3) {
    let minPx = w, maxPx = 0;
    for (let x = 240; x <= 450; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      headSlices.push({
        y: yTo3D(py),
        cx,
        rx,
        rz: Math.max(9.0, rx * 1.0),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 2. TORSO (py: 220 to 475, between arms X: ~280 to ~410)
  const torsoSlices = [];
  for (let py = 220; py <= 475; py += 4) {
    let minPx = w, maxPx = 0;
    // Central body: search between 270 and 420
    for (let x = 270; x <= 420; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      torsoSlices.push({
        y: yTo3D(py),
        cx,
        rx,
        rz: Math.max(10.5, rx * 0.85),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 3. RIGHT ARM (viewer's left, py: 235 to 585, X: 200 to 290)
  const rightArmSlices = [];
  for (let py = 235; py <= 585; py += 5) {
    let minPx = w, maxPx = 0;
    for (let x = 195; x <= 295; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      rightArmSlices.push({
        y: yTo3D(py),
        cx,
        rx: Math.max(3.2, rx),
        rz: Math.max(3.5, rx),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 4. LEFT ARM (viewer's right, py: 235 to 585, X: 395 to 485)
  const leftArmSlices = [];
  for (let py = 235; py <= 585; py += 5) {
    let minPx = w, maxPx = 0;
    for (let x = 390; x <= 490; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      leftArmSlices.push({
        y: yTo3D(py),
        cx,
        rx: Math.max(3.2, rx),
        rz: Math.max(3.5, rx),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 5. SKIRT (py: 460 to 640, X: 220 to 460)
  const skirtSlices = [];
  for (let py = 460; py <= 640; py += 4) {
    let minPx = w, maxPx = 0;
    for (let x = 220; x <= 460; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      skirtSlices.push({
        y: yTo3D(py),
        cx,
        rx,
        rz: Math.max(12.0, rx * 0.85),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 6. RIGHT LEG (viewer's left, py: 620 to 980, X: 280 to 350)
  const rightLegSlices = [];
  for (let py = 620; py <= 980; py += 5) {
    let minPx = w, maxPx = 0;
    for (let x = 280; x <= 350; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      const isShoe = py > 880;
      rightLegSlices.push({
        y: yTo3D(py),
        cx,
        rx: Math.max(3.2, rx),
        rz: isShoe ? 7.5 : Math.max(4.5, rx * 1.1),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  // 7. LEFT LEG (viewer's right, py: 620 to 980, X: 350 to 420)
  const leftLegSlices = [];
  for (let py = 620; py <= 980; py += 5) {
    let minPx = w, maxPx = 0;
    for (let x = 350; x <= 420; x++) {
      if (front.bitmap.data[(py * w + x) * 4 + 3] > 30) {
        if (x < minPx) minPx = x;
        if (x > maxPx) maxPx = x;
      }
    }
    if (maxPx > minPx) {
      const cxPx = (minPx + maxPx) / 2;
      const widthPx = maxPx - minPx;
      const rx = (widthPx / w) * (targetHeight * (w / h)) * 0.5;
      const cx = (cxPx / w - 0.5) * (targetHeight * (w / h));
      const isShoe = py > 880;
      leftLegSlices.push({
        y: yTo3D(py),
        cx,
        rx: Math.max(3.2, rx),
        rz: isShoe ? 7.5 : Math.max(4.5, rx * 1.1),
        minPx,
        maxPx,
        v: vTex(py)
      });
    }
  }

  const parts = {
    head: headSlices,
    torso: torsoSlices,
    rightArm: rightArmSlices,
    leftArm: leftArmSlices,
    skirt: skirtSlices,
    rightLeg: rightLegSlices,
    leftLeg: leftLegSlices
  };

  console.log('Parts slice counts:');
  Object.keys(parts).forEach(k => console.log(`  ${k}: ${parts[k].length} slices`));

  fs.writeFileSync('models/jimena_parts.json', JSON.stringify({
    imgWidth: w,
    imgHeight: h,
    parts
  }));

  console.log('Saved models/jimena_parts.json successfully!');
}

buildPartsData().catch(console.error);
