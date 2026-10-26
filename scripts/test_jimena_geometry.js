const fs = require('fs');

// Mock or require Three.js
// We can test the exact vertex logic that will run in app.js
const depthData = JSON.parse(fs.readFileSync('models/jimena_depth.json', 'utf8'));
const { cols, rows, depthGrid } = depthData;

console.log(`Grid: ${cols} cols, ${rows} rows`);

const targetHeight = 150;
const targetWidth = targetHeight * (682 / 1024); // ~99.9 units
const halfW = targetWidth / 2;
const halfH = targetHeight / 2;

// Count valid quads inside Jimena's silhouette
let quadCount = 0;
for (let r = 0; r < rows - 1; r++) {
  for (let c = 0; c < cols - 1; c++) {
    const d00 = depthGrid[r][c];
    const d10 = depthGrid[r + 1][c];
    const d01 = depthGrid[r][c + 1];
    const d11 = depthGrid[r + 1][c + 1];

    if (d00 > 0 || d10 > 0 || d01 > 0 || d11 > 0) {
      quadCount++;
    }
  }
}

console.log(`Active quads inside silhouette: ${quadCount}`);
console.log(`Front vertices: ${cols * rows}, Back vertices: ${cols * rows}`);
console.log(`Total triangles front + back: ${quadCount * 4}`);
