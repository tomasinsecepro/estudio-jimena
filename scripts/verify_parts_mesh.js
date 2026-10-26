const fs = require('fs');
const THREE = require('../libs/three.min.js');

const data = JSON.parse(fs.readFileSync('models/jimena_parts.json', 'utf8'));
const { imgWidth, imgHeight, parts } = data;

const numRadial = 24;
const stride = numRadial + 1;

let totalVerts = 0, totalTris = 0;

Object.keys(parts).forEach(partName => {
  const slices = parts[partName];
  const numSlices = slices.length;

  // Front Geo
  const frontPositions = [];
  const frontUvs = [];
  const frontIndices = [];

  for (let s = 0; s < numSlices; s++) {
    const sl = slices[s];
    for (let r = 0; r <= numRadial; r++) {
      const frac = r / numRadial;
      const theta = -Math.PI / 2 + frac * Math.PI;

      const x = sl.cx + sl.rx * Math.sin(theta);
      const y = sl.y;
      const z = sl.rz * Math.cos(theta);

      const px = sl.minPx + frac * (sl.maxPx - sl.minPx);
      const u = px / imgWidth;
      const v = sl.v;

      frontPositions.push(x, y, z);
      frontUvs.push(u, v);
    }
  }

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

  // Back Geo
  const backPositions = [];
  const backUvs = [];
  const backIndices = [];

  for (let s = 0; s < numSlices; s++) {
    const sl = slices[s];
    for (let r = 0; r <= numRadial; r++) {
      const frac = r / numRadial;
      const theta = -Math.PI / 2 + frac * Math.PI;

      const x = sl.cx + sl.rx * Math.sin(theta);
      const y = sl.y;
      const z = -sl.rz * Math.cos(theta);

      const px = sl.minPx + (1 - frac) * (sl.maxPx - sl.minPx);
      const u = px / imgWidth;
      const v = sl.v;

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

      backIndices.push(i00, i01, i10);
      backIndices.push(i01, i11, i10);
    }
  }

  const backGeo = new THREE.BufferGeometry();
  backGeo.setAttribute('position', new THREE.Float32BufferAttribute(backPositions, 3));
  backGeo.setAttribute('uv', new THREE.Float32BufferAttribute(backUvs, 2));
  backGeo.setIndex(backIndices);
  backGeo.computeVertexNormals();

  // Smooth normals at side seams
  const fn = frontGeo.attributes.normal.array;
  const bn = backGeo.attributes.normal.array;
  for (let s = 0; s < numSlices; s++) {
    const idx0 = (s * stride + 0) * 3;
    const avgNx0 = (fn[idx0] + bn[idx0]) * 0.5;
    const avgNy0 = (fn[idx0 + 1] + bn[idx0 + 1]) * 0.5;
    const avgNz0 = (fn[idx0 + 2] + bn[idx0 + 2]) * 0.5;
    const len0 = Math.hypot(avgNx0, avgNy0, avgNz0) || 1;
    fn[idx0] = bn[idx0] = avgNx0 / len0;
    fn[idx0 + 1] = bn[idx0 + 1] = avgNy0 / len0;
    fn[idx0 + 2] = bn[idx0 + 2] = avgNz0 / len0;

    const idxN = (s * stride + numRadial) * 3;
    const avgNxN = (fn[idxN] + bn[idxN]) * 0.5;
    const avgNyN = (fn[idxN + 1] + bn[idxN + 1]) * 0.5;
    const avgNzN = (fn[idxN + 2] + bn[idxN + 2]) * 0.5;
    const lenN = Math.hypot(avgNxN, avgNyN, avgNzN) || 1;
    fn[idxN] = bn[idxN] = avgNxN / lenN;
    fn[idxN + 1] = bn[idxN + 1] = avgNyN / lenN;
    fn[idxN + 2] = bn[idxN + 2] = avgNzN / lenN;
  }

  const partVerts = frontPositions.length / 3 + backPositions.length / 3;
  const partTris = frontIndices.length / 3 + backIndices.length / 3;
  totalVerts += partVerts;
  totalTris += partTris;
  console.log(`Part [${partName}]: ${partVerts} verts, ${partTris} triangles`);
});

console.log(`TOTAL CHARACTER: ${totalVerts} verts, ${totalTris} triangles`);
