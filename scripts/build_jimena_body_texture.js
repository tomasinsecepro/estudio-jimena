const { Jimp } = require('jimp');

async function buildCombinedTexture() {
  const front = await Jimp.read('models/jimena_front.png');
  const back = await Jimp.read('models/jimena_back.png');

  const texW = 1024;
  const texH = 1024;

  // Create empty 1024x1024 image
  const combined = new Jimp({ width: texW, height: texH, color: 0x00000000 });

  // Front on right half: X from 512 to 1023 (width 512)
  // Scale front image to width 512, height 1024
  const frontScaled = front.clone().resize({ w: 512, h: 1024 });

  // Back on left half: X from 0 to 511 (width 512)
  // Scale back image to width 512, height 1024
  const backScaled = back.clone().resize({ w: 512, h: 1024 });

  combined.composite(backScaled, 0, 0);
  combined.composite(frontScaled, 512, 0);

  await combined.write('models/jimena_texture.png');
  console.log('Saved models/jimena_texture.png (1024x1024)');
}

buildCombinedTexture().catch(console.error);
