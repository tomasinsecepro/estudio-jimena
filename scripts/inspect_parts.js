const { Jimp } = require('jimp');

async function inspectParts() {
  const front = await Jimp.read('models/jimena_front.png');
  const w = front.width;
  const h = front.height;
  console.log(`Image size: ${w}x${h}`);

  // Let's inspect:
  // 1. Head (Y: ~30 to 240)
  // 2. Torso (Y: ~240 to 470, X: ~290 to 395)
  // 3. Right arm (viewer left, Y: ~240 to 580, X: ~200 to 295)
  // 4. Left arm (viewer right, Y: ~240 to 580, X: ~395 to 490)
  // 5. Skirt (Y: ~460 to 640, X: ~230 to 455)
  // 6. Right leg (viewer left, Y: ~635 to 980, X: ~290 to 350)
  // 7. Left leg (viewer right, Y: ~635 to 980, X: ~350 to 410)

  // Verify legs separation:
  for (let y = 650; y < 900; y += 40) {
    let row = '';
    for (let x = 280; x < 420; x += 4) {
      const a = front.bitmap.data[(y * w + x) * 4 + 3];
      row += a > 50 ? '#' : '.';
    }
    console.log(`Y=${y}: [${row}]`);
  }
}

inspectParts().catch(console.error);
