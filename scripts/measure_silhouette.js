const { Jimp } = require('jimp');

async function measureSilhouette() {
  const img = await Jimp.read('models/jimena_front.png');
  const w = img.width;
  const h = img.height;

  const rows = [];
  const step = 8;

  for (let y = 0; y < h; y += step) {
    let minX = w, maxX = 0, count = 0;
    for (let x = 0; x < w; x++) {
      const alpha = img.bitmap.data[(y * w + x) * 4 + 3];
      if (alpha > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        count++;
      }
    }
    if (count > 0) {
      rows.push({
        y,
        minX,
        maxX,
        width: maxX - minX,
        centerX: (minX + maxX) / 2
      });
    }
  }

  console.log(`Measured ${rows.length} rows across Jimena silhouette.`);
  console.log('Sample rows:');
  for (let i = 0; i < rows.length; i += 12) {
    const r = rows[i];
    console.log(`Y: ${r.y}, Width: ${r.width}, Center: ${r.centerX.toFixed(1)}, Range: [${r.minX}..${r.maxX}]`);
  }
}

measureSilhouette().catch(console.error);
