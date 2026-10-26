const { Jimp } = require('jimp');
const fs = require('fs');

async function buildDepthMap() {
  const img = await Jimp.read('models/jimena_front.png');
  const w = img.width;
  const h = img.height;

  // Grid resolution for the 3D model
  const cols = 90;
  const rows = 140;

  console.log(`Building depth map for grid ${cols}x${rows}...`);

  // 1. Create binary mask on grid
  const mask = new Uint8Array(cols * rows);

  for (let r = 0; r < rows; r++) {
    const py = Math.floor((r / (rows - 1)) * (h - 1));
    for (let c = 0; c < cols; c++) {
      const px = Math.floor((c / (cols - 1)) * (w - 1));
      const idx = (py * w + px) * 4;
      const alpha = img.bitmap.data[idx + 3];
      mask[r * cols + c] = alpha > 50 ? 1 : 0;
    }
  }

  // 2. Compute Euclidean distance to nearest boundary
  const dist = new Float32Array(cols * rows);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      if (mask[i] === 0) {
        dist[i] = 0;
        continue;
      }

      // Find distance to nearest 0 in mask
      let minDistSq = Infinity;
      const searchRadius = 15;
      const rMin = Math.max(0, r - searchRadius);
      const rMax = Math.min(rows - 1, r + searchRadius);
      const cMin = Math.max(0, c - searchRadius);
      const cMax = Math.min(cols - 1, c + searchRadius);

      for (let nr = rMin; nr <= rMax; nr++) {
        for (let nc = cMin; nc <= cMax; nc++) {
          if (mask[nr * cols + nc] === 0) {
            const d2 = (nr - r) * (nr - r) + (nc - c) * (nc - c);
            if (d2 < minDistSq) {
              minDistSq = d2;
            }
          }
        }
      }

      dist[i] = Math.sqrt(minDistSq);
    }
  }

  // 3. Compute anatomical Z thickness at each row
  // Total height: 150 Three.js units (Y from -75 to +75)
  // Max thickness varies anatomically:
  // Head (top 15%): ~6.5 units
  // Neck/Shoulders: ~5.0 units
  // Torso / Chest (25%..45%): ~7.5 units
  // Skirt (45%..62%): ~8.0 units (flared)
  // Thighs / Knees (62%..80%): ~5.5 units
  // Calves / Socks (80%..92%): ~4.5 units
  // Shoes (92%..100%): ~5.5 units

  const depthGrid = [];
  const blendRadius = 5.0; // grid cells to reach full roundness

  for (let r = 0; r < rows; r++) {
    const v = r / (rows - 1); // 0 at top, 1 at bottom
    let maxThickness = 6.0;

    if (v < 0.16) {
      // Head
      maxThickness = 6.5;
    } else if (v < 0.23) {
      // Neck / Shoulders
      maxThickness = 5.0;
    } else if (v < 0.46) {
      // Torso & hoodie
      maxThickness = 7.5;
    } else if (v < 0.63) {
      // Pleated skirt
      maxThickness = 8.5;
    } else if (v < 0.80) {
      // Thighs & knees
      maxThickness = 5.5;
    } else if (v < 0.92) {
      // Calves & socks
      maxThickness = 4.5;
    } else {
      // Shoes
      maxThickness = 5.8;
    }

    const rowDepths = [];
    for (let c = 0; c < cols; c++) {
      const d = dist[r * cols + c];
      if (d <= 0) {
        rowDepths.push(0);
      } else {
        const factor = Math.sin(Math.min(1.0, d / blendRadius) * (Math.PI / 2));
        // Add subtle anatomical curvature
        const z = Number((maxThickness * factor).toFixed(2));
        rowDepths.push(z);
      }
    }
    depthGrid.push(rowDepths);
  }

  // Save as JSON file
  fs.writeFileSync('models/jimena_depth.json', JSON.stringify({
    cols,
    rows,
    depthGrid
  }));

  console.log(`Saved models/jimena_depth.json successfully!`);
}

buildDepthMap().catch(console.error);
