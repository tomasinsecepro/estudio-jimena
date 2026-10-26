const THREE = require('../libs/three.min.js');
const fs = require('fs');

// Test script to verify bounding box with scale 1.25
eval(fs.readFileSync('scripts/build_jimena_avatar.js', 'utf8'));

const model = createJimenaCharacter();
model.scale.set(1.25, 1.25, 1.25);
model.updateMatrixWorld(true);

const bbox = new THREE.Box3().setFromObject(model);
console.log('Scaled Bounding Box:');
console.log('Min:', bbox.min.x.toFixed(1), bbox.min.y.toFixed(1), bbox.min.z.toFixed(1));
console.log('Max:', bbox.max.x.toFixed(1), bbox.max.y.toFixed(1), bbox.max.z.toFixed(1));
const size = bbox.getSize(new THREE.Vector3());
console.log('Size:', size.x.toFixed(1), size.y.toFixed(1), size.z.toFixed(1));
