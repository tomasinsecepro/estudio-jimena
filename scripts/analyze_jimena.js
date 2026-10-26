const { Jimp } = require('jimp');

async function analyze() {
  const img = await Jimp.read('models/jimena_front.jpg');
  console.log('Size:', img.width, 'x', img.height);

  let minX = img.width, maxX = 0, minY = img.height, maxY = 0;

  img.scan(0, 0, img.width, img.height, (x, y, idx) => {
    const r = img.bitmap.data[idx];
    const g = img.bitmap.data[idx + 1];
    const b = img.bitmap.data[idx + 2];
    // if not dark black
    if (r > 15 || g > 15 || b > 15) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  });

  console.log(`Bounding box: X [${minX}, ${maxX}] (width ${maxX - minX}), Y [${minY}, ${maxY}] (height ${maxY - minY})`);

  // Let's sample colors at key vertical heights:
  // Head / Hair: y around minY + (maxY - minY) * 0.08
  // Face: y around minY + (maxY - minY) * 0.12
  // Hoodie collar: y around minY + (maxY - minY) * 0.22
  // Navy sweater: y around minY + (maxY - minY) * 0.32
  // Grey jacket sleeves: x around minX + 20, y around minY + (maxY - minY) * 0.35
  // Skirt: y around minY + (maxY - minY) * 0.52
  // Bare legs: y around minY + (maxY - minY) * 0.70
  // White socks: y around minY + (maxY - minY) * 0.83
  // Shoes: y around minY + (maxY - minY) * 0.94
  const h = maxY - minY;
  const samples = [
    { name: 'Hair top', y: Math.round(minY + h * 0.05) },
    { name: 'Face center', y: Math.round(minY + h * 0.12) },
    { name: 'Grey jacket', y: Math.round(minY + h * 0.35), x: Math.round(minX + 30) },
    { name: 'Navy sweater', y: Math.round(minY + h * 0.35), x: Math.round((minX + maxX) / 2) },
    { name: 'Skirt pleat', y: Math.round(minY + h * 0.52), x: Math.round((minX + maxX) / 2) },
    { name: 'Leg skin', y: Math.round(minY + h * 0.70), x: Math.round((minX + maxX) / 2 - 25) },
    { name: 'White sock', y: Math.round(minY + h * 0.83), x: Math.round((minX + maxX) / 2 - 25) },
    { name: 'Shoe', y: Math.round(minY + h * 0.94), x: Math.round((minX + maxX) / 2 - 25) }
  ];

  for (const s of samples) {
    const x = s.x !== undefined ? s.x : Math.round((minX + maxX) / 2);
    const y = s.y;
    const idx = (y * img.width + x) * 4;
    const r = img.bitmap.data[idx];
    const g = img.bitmap.data[idx + 1];
    const b = img.bitmap.data[idx + 2];
    console.log(`${s.name} at (${x}, ${y}): rgb(${r}, ${g}, ${b})`);
  }
}

analyze().catch(console.error);
