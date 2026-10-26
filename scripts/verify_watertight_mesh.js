const fs = require('fs');
const THREE = require('../libs/three.min.js');

const data = JSON.parse(fs.readFileSync('models/jimena_slices.json', 'utf8'));
const { numSlices, numRadial, targetHeight, targetWidth, slices } = data;

const imgWidth = 682;
const imgHeight = 1024;

// Build Front Geometry
const frontPositions = [];
const frontUvs = [];
const frontIndices = [];

for (let s = 0; s < numSlices; s++) {
  const slice = slices[s];
  for (let r = 0; r <= numRadial; r++) {
    // theta from -PI/2 to +PI/2
    const frac = r / numRadial; // 0 to 1
    const theta = -Math.PI / 2 + frac * Math.PI;

    const x = slice.cx3D + slice.rx3D * Math.sin(theta);
    const y = slice.y3D;
    const z = slice.rz3D * Math.cos(theta); // >= 0

    // Texture UV
    const px = slice.minPx + frac * (slice.maxPx - slice.minPx);
    const u = px / imgWidth;
    const v = slice.vTex;

    frontPositions.push(x, y, z);
    frontUvs.push(u, v);
  }
}

const stride = numRadial + 1;
for (let s = 0; s < numSlices - 1; s++) {
  for (let r = 0; r < numRadial; r++) {
    const i00 = s * stride + r;
    const i01 = s * stride + (r + 1);
    const i10 = (s + 1) * stride + r;
    const i11 = (s + 1) * stride + (r + 1);

    frontIndices.push(i00, i10, i01);
    frontIndices.push(i01, i10, i11);
  }
}

const frontGeo = new THREE.BufferGeometry();
frontGeo.setAttribute('position', new THREE.Float32BufferAttribute(frontPositions, 3));
frontGeo.setAttribute('uv', new THREE.Float32BufferAttribute(frontUvs, 2));
frontGeo.setIndex(frontIndices);
frontGeo.computeVertexNormals();

console.log('Front Geo created! Verts:', frontPositions.length / 3, 'Tris:', frontIndices.length / 3);

// Build Back Geometry
const backPositions = [];
const backUvs = [];
const backIndices = [];

for (let s = 0; s < numSlices; s++) {
  const slice = slices[s];
  for (let r = 0; r <= numRadial; r++) {
    const frac = r / numRadial;
    const theta = -Math.PI / 2 + frac * Math.PI;

    const x = slice.cx3D + slice.rx3D * Math.sin(theta);
    const y = slice.y3D;
    const z = -slice.rz3D * Math.cos(theta); // <= 0

    // Back texture is horizontally flipped so right arm from behind is on right
    const px = slice.minPx + (1 - frac) * (slice.maxPx - slice.minPx);
    const u = px / imgWidth;
    const v = slice.vTex;

    backPositions.push(x, y, z);
    backUvs.push(u, v);
  }
}

for (let s = 0; s < numSlices - 1; s++) {
  for (let r = 0; r < numRadial; r++) {
    const i00 = s * stride + r;
    const i01 = s * stride + (r + 1);
    const i10 = (s + 1) * stride + r;
    const i11 = (s + 1) * stride + (r + 1);

    // Reversed winding for back
    backIndices.push(i00, i01, i10);
    backIndices.push(i01, i11, i10);
  }
}

const backGeo = new THREE.BufferGeometry();
backGeo.setAttribute('position', new THREE.Float32BufferAttribute(backPositions, 3));
backGeo.setAttribute('uv', new THREE.Float32BufferAttribute(backUvs, 2));
backGeo.setIndex(backIndices);
backGeo.computeVertexNormals();

console.log('Back Geo created! Verts:', backPositions.length / 3, 'Tris:', backIndices.length / 3);

// Check seam vertices: r=0 (left edge) and r=numRadial (right edge)
let maxSeamDiff = 0;
for (let s = 0; s < numSlices; s++) {
  // Left edge (r = 0)
  const idx0 = (s * stride + 0) * 3;
  const fx0 = frontPositions[idx0], fy0 = frontPositions[idx0+1], fz0 = frontPositions[idx0+2];
  const bx0 = backPositions[idx0], by0 = backPositions[idx0+1], bz0 = backPositions[idx0+2];
  const d0 = Math.hypot(fx0 - bx0, fy0 - by0, fz0 - bz0);
  if (d0 > maxSeamDiff) maxSeamDiff = d0;

  // Right edge (r = numRadial)
  const idxN = (s * stride + numRadial) * 3;
  const fxN = frontPositions[idxN], fyN = frontPositions[idxN+1], fzN = frontPositions[idxN+2];
  const bxN = backPositions[idxN], byN = backPositions[idxN+1], bzN = backPositions[idxN+2];
  const dN = Math.hypot(fxN - bxN, fyN - byN, fzN - bzN);
  if (dN > maxSeamDiff) maxSeamDiff = dN;
}

console.log('MAXIMUM SEAM DIFFERENCE BETWEEN FRONT AND BACK:', maxSeamDiff);
