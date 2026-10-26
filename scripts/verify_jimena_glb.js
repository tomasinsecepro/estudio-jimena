const fs = require('fs');
const THREE = require('../libs/three.min.js');

// Mock browser environment for GLTFLoader if needed or test JSON chunk
const buf = fs.readFileSync('models/jimena.glb');
console.log('File size:', buf.length, 'bytes');

const jsonLen = buf.readUInt32LE(12);
const gltf = JSON.parse(buf.toString('utf8', 20, 20 + jsonLen));

console.log('Meshes:', gltf.meshes.length);
console.log('Primitives:', gltf.meshes[0].primitives.length);
console.log('Vertex count:', gltf.accessors[gltf.meshes[0].primitives[0].attributes.POSITION].count);
console.log('Index count:', gltf.accessors[gltf.meshes[0].primitives[0].indices].count);
console.log('Triangle count:', gltf.accessors[gltf.meshes[0].primitives[0].indices].count / 3);
