const THREE = require('../libs/three.min.js');

function createJimenaCharacter() {
  const root = new THREE.Group();
  root.name = "jimena_cuerpo_3d";

  // Palette matched exactly to Jimena's photo
  const skinColor = 0xf5ceb8;      // Natural warm skin tone
  const hairColor = 0x6e4732;      // Jimena's chestnut brown hair
  const hairShadow = 0x543524;     // Hair underside shadow
  const whiteShirt = 0xf8fafc;     // White polo collar
  const navyUniform = 0x1a243b;    // Navy school vest & pleated skirt
  const greyCardigan = 0xd4d4d8;   // Heather grey zip hoodie / cardigan
  const sockColor = 0xffffff;      // White socks
  const sneakerSilver = 0xc5c7cb;  // Metallic silver sneakers
  const sneakerSole = 0xe4d5b7;    // Gum rubber sole

  // Soft matte materials (roughness 0.7, metalness 0.0 - zero shine!)
  const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.7, metalness: 0.0 });
  const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.75, metalness: 0.0 });
  const hairShadowMat = new THREE.MeshStandardMaterial({ color: hairShadow, roughness: 0.8, metalness: 0.0 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: whiteShirt, roughness: 0.7, metalness: 0.0 });
  const navyMat = new THREE.MeshStandardMaterial({ color: navyUniform, roughness: 0.75, metalness: 0.0 });
  const cardiganMat = new THREE.MeshStandardMaterial({ color: greyCardigan, roughness: 0.7, metalness: 0.0 });
  const sockMat = new THREE.MeshStandardMaterial({ color: sockColor, roughness: 0.6, metalness: 0.0 });
  const shoeMat = new THREE.MeshStandardMaterial({ color: sneakerSilver, roughness: 0.5, metalness: 0.05 });
  const soleMat = new THREE.MeshStandardMaterial({ color: sneakerSole, roughness: 0.8, metalness: 0.0 });

  // --- 1. HEAD & HAIR (Cabeza) ---
  const headGroup = new THREE.Group();
  headGroup.name = "part_head";
  headGroup.userData.partId = "cabeza";
  headGroup.position.set(0, 52, 0);

  // Face oval
  const faceMesh = new THREE.Mesh(new THREE.SphereGeometry(8.5, 32, 24), skinMat);
  faceMesh.scale.set(1.0, 1.15, 0.95);
  headGroup.add(faceMesh);

  // Cheeks
  const leftCheek = new THREE.Mesh(new THREE.SphereGeometry(3.5, 16, 16), skinMat);
  leftCheek.position.set(-3.8, -1.5, 5.0);
  headGroup.add(leftCheek);
  const rightCheek = new THREE.Mesh(new THREE.SphereGeometry(3.5, 16, 16), skinMat);
  rightCheek.position.set(3.8, -1.5, 5.0);
  headGroup.add(rightCheek);

  // Ears
  const leftEar = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 12), skinMat);
  leftEar.position.set(-8.4, 0, 0);
  headGroup.add(leftEar);
  const rightEar = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 12), skinMat);
  rightEar.position.set(8.4, 0, 0);
  headGroup.add(rightEar);

  // Hair - Main top & back dome
  const hairDome = new THREE.Mesh(new THREE.SphereGeometry(9.3, 32, 24), hairMat);
  hairDome.position.set(0, 1.2, -1.2);
  headGroup.add(hairDome);

  // Hair - Front bangs (parted in the center, framing forehead)
  const leftBang = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.5, 14, 16), hairMat);
  leftBang.position.set(-6.5, -4, 4.5);
  leftBang.rotation.z = 0.15;
  headGroup.add(leftBang);

  const rightBang = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.5, 14, 16), hairMat);
  rightBang.position.set(6.5, -4, 4.5);
  rightBang.rotation.z = -0.15;
  headGroup.add(rightBang);

  // Hair - Long flowing back hair (cascades down past shoulders onto back of jacket)
  const backHairCentral = new THREE.Mesh(new THREE.CylinderGeometry(8.2, 9.5, 24, 24), hairMat);
  backHairCentral.position.set(0, -9, -3.5);
  backHairCentral.scale.set(1.0, 1.0, 0.6);
  headGroup.add(backHairCentral);

  const backHairStrandL = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.2, 22, 16), hairShadowMat);
  backHairStrandL.position.set(-6.5, -8, -3.8);
  headGroup.add(backHairStrandL);

  const backHairStrandR = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.2, 22, 16), hairShadowMat);
  backHairStrandR.position.set(6.5, -8, -3.8);
  headGroup.add(backHairStrandR);

  // Eyes & Smile
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(1.0, 12, 12), new THREE.MeshStandardMaterial({ color: 0x3b2416, roughness: 0.3 }));
  eyeL.position.set(-3.2, 0.8, 7.8);
  headGroup.add(eyeL);
  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(1.0, 12, 12), new THREE.MeshStandardMaterial({ color: 0x3b2416, roughness: 0.3 }));
  eyeR.position.set(3.2, 0.8, 7.8);
  headGroup.add(eyeR);

  // Gentle smile
  const smile = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.25, 8, 16, Math.PI * 0.7), new THREE.MeshStandardMaterial({ color: 0xcc6666, roughness: 0.5 }));
  smile.position.set(0, -3.2, 7.8);
  smile.rotation.x = Math.PI * 0.85;
  smile.rotation.z = Math.PI * 0.15;
  headGroup.add(smile);

  root.add(headGroup);

  // --- 2. NECK & TORSO (Tronco) ---
  const torsoGroup = new THREE.Group();
  torsoGroup.name = "part_torso";
  torsoGroup.userData.partId = "tronco";
  torsoGroup.position.set(0, 26, 0);

  // Neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(3.0, 3.4, 6, 16), skinMat);
  neck.position.set(0, 16.5, 0);
  torsoGroup.add(neck);

  // White shirt collar
  const collarL = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.0, 0.8), shirtMat);
  collarL.position.set(-2.4, 14.5, 4.6);
  collarL.rotation.set(-0.2, 0.2, -0.4);
  torsoGroup.add(collarL);

  const collarR = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.0, 0.8), shirtMat);
  collarR.position.set(2.4, 14.5, 4.6);
  collarR.rotation.set(-0.2, -0.2, 0.4);
  torsoGroup.add(collarR);

  // Navy V-neck sweater vest (center chest)
  const sweater = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 9.5, 22, 24), navyMat);
  sweater.scale.set(1.0, 1.0, 0.75);
  sweater.position.set(0, 4, 0);
  torsoGroup.add(sweater);

  // Grey hoodie / cardigan - open front jacket sides
  const jacketBack = new THREE.Mesh(new THREE.CylinderGeometry(9.2, 10.0, 22.5, 24, 1, false, Math.PI * 0.5, Math.PI), cardiganMat);
  jacketBack.scale.set(1.02, 1.0, 0.78);
  jacketBack.position.set(0, 4, 0);
  torsoGroup.add(jacketBack);

  const jacketFlapL = new THREE.Mesh(new THREE.BoxGeometry(4.2, 22, 1.5), cardiganMat);
  jacketFlapL.position.set(-7.5, 4, 3.2);
  jacketFlapL.rotation.y = 0.25;
  torsoGroup.add(jacketFlapL);

  const jacketFlapR = new THREE.Mesh(new THREE.BoxGeometry(4.2, 22, 1.5), cardiganMat);
  jacketFlapR.position.set(7.5, 4, 3.2);
  jacketFlapR.rotation.y = -0.25;
  torsoGroup.add(jacketFlapR);

  // Hoodie hood resting on upper back
  const hood = new THREE.Mesh(new THREE.TorusGeometry(6.5, 1.6, 12, 20, Math.PI), cardiganMat);
  hood.position.set(0, 13.5, -4.2);
  hood.rotation.x = Math.PI * 0.45;
  torsoGroup.add(hood);

  root.add(torsoGroup);

  // --- 3. SEPARATED ARMS (Extremidades Superiores) ---
  // Right Arm (Jimena's right, viewer's left)
  const armR = new THREE.Group();
  armR.name = "part_rightArm";
  armR.userData.partId = "extremidades_sup";
  armR.position.set(-14.5, 34, 0);

  // Shoulder
  const shoulderR = new THREE.Mesh(new THREE.SphereGeometry(3.5, 16, 16), cardiganMat);
  armR.add(shoulderR);

  // Upper sleeve (Cylinder / Capsule)
  const upperArmR = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.0, 15, 16), cardiganMat);
  upperArmR.position.set(-1.5, -8, 0);
  upperArmR.rotation.z = 0.12;
  armR.add(upperArmR);

  // Forearm sleeve
  const lowerArmR = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.6, 15, 16), cardiganMat);
  lowerArmR.position.set(-2.8, -21, 0.5);
  lowerArmR.rotation.z = 0.05;
  armR.add(lowerArmR);

  // Hand
  const handR = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 16), skinMat);
  handR.scale.set(0.9, 1.3, 0.8);
  handR.position.set(-3.2, -30, 0.8);
  armR.add(handR);

  root.add(armR);

  // Left Arm (Jimena's left, viewer's right)
  const armL = new THREE.Group();
  armL.name = "part_leftArm";
  armL.userData.partId = "extremidades_sup";
  armL.position.set(14.5, 34, 0);

  // Shoulder
  const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(3.5, 16, 16), cardiganMat);
  armL.add(shoulderL);

  // Upper sleeve
  const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.0, 15, 16), cardiganMat);
  upperArmL.position.set(1.5, -8, 0);
  upperArmL.rotation.z = -0.12;
  armL.add(upperArmL);

  // Forearm sleeve
  const lowerArmL = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.6, 15, 16), cardiganMat);
  lowerArmL.position.set(2.8, -21, 0.5);
  lowerArmL.rotation.z = -0.05;
  armL.add(lowerArmL);

  // Hand
  const handL = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 16), skinMat);
  handL.scale.set(0.9, 1.3, 0.8);
  handL.position.set(3.2, -30, 0.8);
  armL.add(handL);

  root.add(armL);

  // --- 4. PLEATED SKIRT (Falda de tablas escolar) ---
  const skirtGroup = new THREE.Group();
  skirtGroup.name = "part_skirt";
  skirtGroup.userData.partId = "tronco";
  skirtGroup.position.set(0, 10, 0);

  // Flaring pleated skirt cone
  const skirtCone = new THREE.Mesh(new THREE.CylinderGeometry(9.6, 16.5, 20, 32), navyMat);
  skirtCone.scale.set(1.0, 1.0, 0.82);
  skirtGroup.add(skirtCone);

  // 12 Pleat ridges (tablas de la falda escolar)
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const pleat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 20.2, 1.2), new THREE.MeshStandardMaterial({ color: 0x121a2c, roughness: 0.8 }));
    const rTop = 9.8, rBot = 16.8;
    pleat.position.set(Math.sin(angle) * (rTop + rBot) * 0.5, 0, Math.cos(angle) * (rTop + rBot) * 0.5 * 0.82);
    pleat.rotation.y = angle;
    skirtGroup.add(pleat);
  }

  root.add(skirtGroup);

  // --- 5. SEPARATED LEGS & SNEAKERS (Extremidades Inferiores) ---
  // Right Leg (Jimena's right, viewer's left)
  const legR = new THREE.Group();
  legR.name = "part_rightLeg";
  legR.userData.partId = "extremidades_inf";
  legR.position.set(-6.2, -5, 0);

  // Thigh (under skirt)
  const thighR = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 3.8, 24, 20), skinMat);
  thighR.position.set(0, -6, 0);
  legR.add(thighR);

  // Knee
  const kneeR = new THREE.Mesh(new THREE.SphereGeometry(3.6, 16, 16), skinMat);
  kneeR.position.set(0, -18, 0.4);
  legR.add(kneeR);

  // Calf
  const calfR = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.2, 22, 20), skinMat);
  calfR.position.set(0, -29, 0);
  legR.add(calfR);

  // White cotton sock
  const sockR = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.3, 14, 20), sockMat);
  sockR.position.set(0, -42, 0);
  legR.add(sockR);

  // Silver sneaker
  const shoeRGroup = new THREE.Group();
  shoeRGroup.position.set(0, -51, 1.5);

  const shoeRBody = new THREE.Mesh(new THREE.BoxGeometry(6.2, 5.0, 13.0), shoeMat);
  shoeRGroup.add(shoeRBody);

  const shoeRToe = new THREE.Mesh(new THREE.SphereGeometry(3.1, 16, 16), shoeMat);
  shoeRToe.position.set(0, -0.4, 5.5);
  shoeRGroup.add(shoeRToe);

  const soleR = new THREE.Mesh(new THREE.BoxGeometry(6.6, 1.8, 14.2), soleMat);
  soleR.position.set(0, -2.6, 0.5);
  shoeRGroup.add(soleR);

  legR.add(shoeRGroup);
  root.add(legR);

  // Left Leg (Jimena's left, viewer's right)
  const legL = new THREE.Group();
  legL.name = "part_leftLeg";
  legL.userData.partId = "extremidades_inf";
  legL.position.set(6.2, -5, 0);

  // Thigh (under skirt)
  const thighL = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 3.8, 24, 20), skinMat);
  thighL.position.set(0, -6, 0);
  legL.add(thighL);

  // Knee
  const kneeL = new THREE.Mesh(new THREE.SphereGeometry(3.6, 16, 16), skinMat);
  kneeL.position.set(0, -18, 0.4);
  legL.add(kneeL);

  // Calf
  const calfL = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.2, 22, 20), skinMat);
  calfL.position.set(0, -29, 0);
  legL.add(calfL);

  // White cotton sock
  const sockL = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.3, 14, 20), sockMat);
  sockL.position.set(0, -42, 0);
  legL.add(sockL);

  // Silver sneaker
  const shoeLGroup = new THREE.Group();
  shoeLGroup.position.set(0, -51, 1.5);

  const shoeLBody = new THREE.Mesh(new THREE.BoxGeometry(6.2, 5.0, 13.0), shoeMat);
  shoeLGroup.add(shoeLBody);

  const shoeLToe = new THREE.Mesh(new THREE.SphereGeometry(3.1, 16, 16), shoeMat);
  shoeLToe.position.set(0, -0.4, 5.5);
  shoeLGroup.add(shoeLToe);

  const soleL = new THREE.Mesh(new THREE.BoxGeometry(6.6, 1.8, 14.2), soleMat);
  soleL.position.set(0, -2.6, 0.5);
  shoeLGroup.add(soleL);

  legL.add(shoeLGroup);
  root.add(legL);

  // Shadow casting
  root.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return root;
}

console.log('Testing createJimenaCharacter...');
const char = createJimenaCharacter();
console.log('Character built successfully!');
console.log('Direct children:', char.children.map(c => c.name));
console.log('Total meshes inside:', (() => {
  let count = 0;
  char.traverse(c => { if (c.isMesh) count++; });
  return count;
})());
