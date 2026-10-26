const fs = require('fs');
const THREE = require('./libs/three.min.js');

const depthData = JSON.parse(fs.readFileSync('models/jimena_depth.json', 'utf8'));
const { cols, rows, depthGrid } = depthData;

const targetHeight = 150;
const targetWidth = targetHeight * (682 / 1024);
const halfW = targetWidth / 2;
const halfH = targetHeight / 2;
const stepX = targetWidth / (cols - 1);
const stepY = targetHeight / (rows - 1);

// Build Front Geometry
const frontPositions = [];
const frontNormals = [];
const frontUvs = [];
const frontIndices = [];

for (let r = 0; r < rows; r++) {
  const y = halfH - r * stepY;
  const v = 1 - r / (rows - 1);
  for (let c = 0; c < cols; c++) {
    const x = -halfW + c * stepX;
    const u = c / (cols - 1);
    const z = depthGrid[r][c];

    frontPositions.push(x, y, z);
    frontUvs.push(u, v);
  }
}

for (let r = 0; r < rows - 1; r++) {
  for (let c = 0; c < cols - 1; c++) {
    const d00 = depthGrid[r][c];
    const d10 = depthGrid[r + 1][c];
    const d01 = depthGrid[r][c + 1];
    const d11 = depthGrid[r + 1][c + 1];

    if (d00 > 0 || d10 > 0 || d01 > 0 || d11 > 0) {
      const i00 = r * cols + c;
      const i01 = r * cols + (c + 1);
      const i10 = (r + 1) * cols + c;
      const i11 = (r + 1) * cols + (c + 1);

      // Tri 1
      frontIndices.push(i00, i10, i01);
      // Tri 2
      frontIndices.push(i01, i10, i11);
    }
  }
}

const frontGeo = new THREE.BufferGeometry();
frontGeo.setAttribute('position', new THREE.Float32BufferAttribute(frontPositions, 3));
frontGeo.setAttribute('uv', new THREE.Float32BufferAttribute(frontUvs, 2));
frontGeo.setIndex(frontIndices);
frontGeo.computeVertexNormals();

console.log('Front Geometry valid! Vertices:', frontPositions.length / 3, 'Indices:', frontIndices.length);

// Build Back Geometry
const backPositions = [];
const backUvs = [];
const backIndices = [];

for (let r = 0; r < rows; r++) {
  const y = halfH - r * stepY;
  const v = 1 - r / (rows - 1);
  for (let c = 0; c < cols; c++) {
    const x = -halfW + c * stepX;
    const u = c / (cols - 1);
    const z = -depthGrid[r][c];

    backPositions.push(x, y, z);
    backUvs.push(u, v);
  }
}

for (let r = 0; r < rows - 1; r++) {
  for (let c = 0; c < cols - 1; c++) {
    const d00 = depthGrid[r][c];
    const d10 = depthGrid[r + 1][c];
    const d01 = depthGrid[r][c + 1];
    const d11 = depthGrid[r + 1][c + 1];

    if (d00 > 0 || d10 > 0 || d01 > 0 || d11 > 0) {
      const i00 = r * cols + c;
      const i01 = r * cols + (c + 1);
      const i10 = (r + 1) * cols + c;
      const i11 = (r + 1) * cols + (c + 1);

      // Tri 1 (Reversed winding for outward normal toward -Z)
      backIndices.push(i00, i01, i10);
      // Tri 2
      backIndices.push(i01, i11, i10);
    }
  }
}

const backGeo = new THREE.BufferGeometry();
backGeo.setAttribute('position', new THREE.Float32BufferAttribute(backPositions, 3));
backGeo.setAttribute('uv', new THREE.Float32BufferAttribute(backUvs, 2));
backGeo.setIndex(backIndices);
backGeo.computeVertexNormals();

console.log('Back Geometry valid! Vertices:', backPositions.length / 3, 'Indices:', backIndices.length);

// Check sample normals
const fn = frontGeo.attributes.normal.array;
const bn = backGeo.attributes.normal.array;
const midIdx = (Math.floor(rows / 2) * cols + Math.floor(cols / 2)) * 3;
console.log('Center Front Normal:', fn[midIdx], fn[midIdx + 1], fn[midIdx + 2]);
console.log('Center Back Normal:', bn[midIdx], bn[midIdx + 1], bn[midIdx + 2]);
