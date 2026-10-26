/**
 * El Cuaderno de Estudio de Jimena - 3D Interactivo Hiperrealista
 * Conocimiento del Medio 5º de Primaria
 */

// --- Base de Datos Anatómica y Puntos Clave ---
const ANATOMY_DATA = {
  persona: {
    title: "Cuerpo de Jimena en 3D (Cuerpo Real)",
    subtitle: "Gira a Jimena en 3D para verla de frente y por detrás. Aprende las partes del cuerpo humano.",
    cameraPos: { x: 0, y: 5, z: 220 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "cabeza",
        name: "Cabeza",
        aliases: ["cabeza", "la cabeza"],
        desc: "Contiene el cerebro, el pelo y los órganos de los sentidos (ojos, oídos, nariz y boca).",
        anchor3D: new THREE.Vector3(0, 58, 6),
        side: "left"
      },
      {
        id: "tronco",
        name: "Tronco",
        aliases: ["tronco", "el tronco", "torso"],
        desc: "Parte central del cuerpo formada por el tórax, pecho y abdomen.",
        anchor3D: new THREE.Vector3(0, 22, 8),
        side: "right"
      },
      {
        id: "extremidades_sup",
        name: "Extremidades superiores",
        aliases: ["extremidades superiores", "brazos", "los brazos", "brazo"],
        desc: "Formadas por los hombros, brazos, codos, antebrazos, muñecas y manos.",
        anchor3D: new THREE.Vector3(-18, 16, 3),
        side: "left"
      },
      {
        id: "extremidades_inf",
        name: "Extremidades inferiores",
        aliases: ["extremidades inferiores", "piernas", "las piernas", "pierna"],
        desc: "Formadas por las caderas, muslos, rodillas, piernas, tobillos y pies.",
        anchor3D: new THREE.Vector3(8, -36, 4),
        side: "right"
      }
    ]
  },

  huesos: {
    title: "El Esqueleto Humano",
    subtitle: "Los huesos son las partes rígidas y duras del cuerpo. Se unen mediante las articulaciones.",
    cameraPos: { x: 0, y: 12, z: 225 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "craneo",
        name: "Cráneo",
        aliases: ["craneo", "el craneo"],
        desc: "Hueso rígido que protege el encéfalo y da forma a la cabeza.",
        anchor3D: new THREE.Vector3(0, 70, 5),
        side: "left"
      },
      {
        id: "mandibula",
        name: "Mandíbula",
        aliases: ["mandibula", "la mandibula", "maxilar inferior"],
        desc: "Hueso móvil de la cara que nos permite masticar y hablar.",
        anchor3D: new THREE.Vector3(0, 60, 6),
        side: "left"
      },
      {
        id: "clavicula",
        name: "Clavícula",
        aliases: ["clavicula", "la clavicula"],
        desc: "Hueso largo en la parte superior del pecho que une el brazo con el tronco.",
        anchor3D: new THREE.Vector3(-12, 50, 4),
        side: "left"
      },
      {
        id: "esternon",
        name: "Esternón",
        aliases: ["esternon", "el esternon"],
        desc: "Hueso plano situado en el centro del pecho que une las costillas.",
        anchor3D: new THREE.Vector3(0, 41, 6),
        side: "right"
      },
      {
        id: "costillas",
        name: "Costillas",
        aliases: ["costillas", "las costillas", "costilla"],
        desc: "Huesos curvados que forman la caja torácica protegiendo el corazón y los pulmones.",
        anchor3D: new THREE.Vector3(13, 37, 5),
        side: "right"
      },
      {
        id: "columna_vertebral",
        name: "Columna vertebral",
        aliases: ["columna vertebral", "columna", "la columna vertebral", "la columna"],
        desc: "Eje vertical formado por 33 vértebras que sostiene el cuerpo y protege la médula.",
        anchor3D: new THREE.Vector3(0, 28, -2),
        side: "left"
      },
      {
        id: "humero",
        name: "Húmero",
        aliases: ["humero", "el humero"],
        desc: "Hueso largo del brazo, situado entre el hombro y el codo.",
        anchor3D: new THREE.Vector3(16, 33, 1),
        side: "right"
      },
      {
        id: "radio",
        name: "Radio",
        aliases: ["radio", "el radio"],
        desc: "Hueso del antebrazo situado en la misma línea que el dedo pulgar.",
        anchor3D: new THREE.Vector3(-18, 14, 2),
        side: "left"
      },
      {
        id: "cubito",
        name: "Cúbito",
        aliases: ["cubito", "el cubito"],
        desc: "Hueso del antebrazo situado en la línea del dedo meñique.",
        anchor3D: new THREE.Vector3(18, 13, -1),
        side: "right"
      },
      {
        id: "pelvis",
        name: "Pelvis",
        aliases: ["pelvis", "la pelvis", "cadera", "las caderas"],
        desc: "Hueso ancho en forma de cuenco que sostiene los órganos abdominales y une las piernas.",
        anchor3D: new THREE.Vector3(-9, 6, 3),
        side: "left"
      },
      {
        id: "femur",
        name: "Fémur",
        aliases: ["femur", "el femur"],
        desc: "El hueso más largo y resistente de todo el cuerpo humano, situado en el muslo.",
        anchor3D: new THREE.Vector3(-10, -22, 3),
        side: "left"
      },
      {
        id: "rotula",
        name: "Rótula",
        aliases: ["rotula", "la rotula"],
        desc: "Hueso redondeado que protege la articulación de la rodilla y permite flexionar la pierna.",
        anchor3D: new THREE.Vector3(-9, -42, 5),
        side: "left"
      },
      {
        id: "tibia",
        name: "Tibia",
        aliases: ["tibia", "la tibia"],
        desc: "Hueso principal y más grueso de la pierna, forma la espinilla.",
        anchor3D: new THREE.Vector3(9, -58, 3),
        side: "right"
      },
      {
        id: "perone",
        name: "Peroné",
        aliases: ["perone", "el perone"],
        desc: "Hueso fino situado al lado exterior de la tibia en la pierna.",
        anchor3D: new THREE.Vector3(-14, -59, 2),
        side: "left"
      }
    ]
  },

  musculos_del: {
    title: "Músculos Delanteros",
    subtitle: "Solo están coloreados en rojo los 5 músculos que tienes que aprender.",
    cameraPos: { x: 0, y: 12, z: 220 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "frontal",
        name: "Frontal",
        aliases: ["frontal", "el frontal", "musculo frontal"],
        desc: "Músculo de la frente que permite arrugar la frente y subir las cejas.",
        anchor3D: new THREE.Vector3(0, 73, 7),
        side: "left"
      },
      {
        id: "pectoral",
        name: "Pectoral",
        aliases: ["pectoral", "pectorales", "los pectorales", "el pectoral"],
        desc: "Músculos anchos del pecho que ayudan a empujar y mover los brazos.",
        anchor3D: new THREE.Vector3(-9, 44, 8),
        side: "left"
      },
      {
        id: "biceps",
        name: "Bíceps",
        aliases: ["biceps", "el biceps", "los biceps"],
        desc: "Músculo frontal del brazo que se hincha al flexionar el codo.",
        anchor3D: new THREE.Vector3(-16, 34, 4),
        side: "left"
      },
      {
        id: "abdominales",
        name: "Abdominales",
        aliases: ["abdominales", "los abdominales", "abdomen", "el abdomen"],
        desc: "Músculos del vientre que protegen el interior y flexionan el tronco hacia delante.",
        anchor3D: new THREE.Vector3(0, 22, 9),
        side: "right"
      },
      {
        id: "cuadriceps",
        name: "Cuádriceps",
        aliases: ["cuadriceps", "el cuadriceps", "los cuadriceps"],
        desc: "Músculo frontal del muslo, fundamental para caminar, correr y saltar.",
        anchor3D: new THREE.Vector3(10, -22, 7),
        side: "right"
      }
    ]
  },

  musculos_tras: {
    title: "Músculos Traseros",
    subtitle: "Solo están coloreados en rojo los 5 músculos posteriores del libro de texto.",
    cameraPos: { x: 0, y: 12, z: -220 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "deltoides",
        name: "Deltoides",
        aliases: ["deltoides", "el deltoides", "hombro", "los hombros"],
        desc: "Músculo triangular en el hombro que permite levantar el brazo en todas direcciones.",
        anchor3D: new THREE.Vector3(-15, 48, -4),
        side: "left"
      },
      {
        id: "triceps",
        name: "Tríceps",
        aliases: ["triceps", "el triceps", "los triceps"],
        desc: "Músculo de la parte posterior del brazo que permite estirar el codo.",
        anchor3D: new THREE.Vector3(16, 34, -4),
        side: "right"
      },
      {
        id: "dorsal",
        name: "Dorsal",
        aliases: ["dorsal", "el dorsal", "dorsales", "los dorsales"],
        desc: "Músculo grande y plano de la espalda que permite tirar y trepar.",
        anchor3D: new THREE.Vector3(10, 30, -7),
        side: "right"
      },
      {
        id: "gluteo",
        name: "Glúteo",
        aliases: ["gluteo", "gluteos", "el gluteo", "los gluteos"],
        desc: "Músculo potente de las nalgas que mantiene la postura erguida de la espalda.",
        anchor3D: new THREE.Vector3(-9, 6, -8),
        side: "left"
      },
      {
        id: "gemelos",
        name: "Gemelos",
        aliases: ["gemelos", "los gemelos", "gemelo", "gastrocnemio"],
        desc: "Músculos de la pantorrilla que se unen al talón y nos impulsan al correr.",
        anchor3D: new THREE.Vector3(9, -52, -6),
        side: "right"
      }
    ]
  },

  ojo: {
    title: "El Sentido de la Vista: El Ojo",
    subtitle: "Corte transversal pedagógico idéntico al libro de texto con todos sus elementos reconocibles.",
    cameraPos: { x: 0, y: 0, z: 85 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "esclerotica",
        name: "Esclerótica",
        aliases: ["esclerotica", "la esclerotica"],
        desc: "Es la capa blanca y protectora que rodea el ojo.",
        anchor3D: new THREE.Vector3(8, 20, 2),
        side: "right"
      },
      {
        id: "cornea",
        name: "Córnea",
        aliases: ["cornea", "la cornea"],
        desc: "Es la parte central y transparente de la esclerótica en el frontal.",
        anchor3D: new THREE.Vector3(-28, 2, 2),
        side: "left"
      },
      {
        id: "iris",
        name: "Iris",
        aliases: ["iris", "el iris"],
        desc: "Es la parte coloreada del ojo (azul, marrón o verde) que regula la luz.",
        anchor3D: new THREE.Vector3(-22, 7, 2),
        side: "left"
      },
      {
        id: "pupila",
        name: "Pupila",
        aliases: ["pupila", "la pupila"],
        desc: "Es una abertura en el centro del iris. Desde el exterior se ve como un círculo negro.",
        anchor3D: new THREE.Vector3(-22, -2, 2),
        side: "left"
      },
      {
        id: "cristalino",
        name: "Cristalino",
        aliases: ["cristalino", "el cristalino"],
        desc: "Es como una lupa que sirve para que las imágenes que vemos lleguen bien enfocadas.",
        anchor3D: new THREE.Vector3(-14, 1, 2),
        side: "left"
      },
      {
        id: "retina",
        name: "Retina",
        aliases: ["retina", "la retina"],
        desc: "Es una membrana que recubre el interior del ojo y es sensible a la luz.",
        anchor3D: new THREE.Vector3(8, -4, 2),
        side: "right"
      },
      {
        id: "nervio_optico",
        name: "Nervio óptico",
        aliases: ["nervio optico", "el nervio optico"],
        desc: "Transporta las señales visuales desde el ojo directamente al cerebro.",
        anchor3D: new THREE.Vector3(28, 3, 2),
        side: "right"
      }
    ]
  },

  oido: {
    title: "El Sentido del Oído: La Audición",
    subtitle: "Corte anatómico completo y relleno: oído externo, oído medio y oído interno.",
    cameraPos: { x: 0, y: 0, z: 85 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
    items: [
      {
        id: "pabellon_auditivo",
        name: "Pabellón auditivo",
        aliases: ["pabellon auditivo", "el pabellon auditivo", "oreja", "la oreja", "pabellon auricular"],
        desc: "Estructura exterior cartilaginosa que capta y canaliza el sonido (la oreja).",
        anchor3D: new THREE.Vector3(-29, 6, 2),
        side: "left"
      },
      {
        id: "conducto_auditivo",
        name: "Conducto auditivo",
        aliases: ["conducto auditivo", "el conducto auditivo", "conducto auditivo externo", "canal auditivo"],
        desc: "Canal por donde viajan las ondas de sonido hasta llegar al tímpano.",
        anchor3D: new THREE.Vector3(-13, -2, 2),
        side: "left"
      },
      {
        id: "timpano",
        name: "Tímpano",
        aliases: ["timpano", "el timpano"],
        desc: "Membrana fina que separa el oído externo del medio y vibra al chocar el sonido.",
        anchor3D: new THREE.Vector3(-1, -1, 2),
        side: "left"
      },
      {
        id: "huesecillos",
        name: "Huesecillos",
        aliases: ["huesecillos", "los huesecillos", "cadena de huesecillos", "martillo yunque y estribo"],
        desc: "Cadena de tres pequeños huesos (martillo, yunque y estribo) que amplifica la vibración.",
        anchor3D: new THREE.Vector3(3, 4, 2),
        side: "right"
      },
      {
        id: "caracol",
        name: "Caracol",
        aliases: ["caracol", "el caracol", "coclea", "la coclea"],
        desc: "Conducto en espiral del oído interno que contiene los receptores auditivos.",
        anchor3D: new THREE.Vector3(16, -2, 2),
        side: "right"
      },
      {
        id: "nervio_auditivo",
        name: "Nervio auditivo",
        aliases: ["nervio auditivo", "el nervio auditivo"],
        desc: "Es quien transporta los estímulos auditivos directamente al cerebro.",
        anchor3D: new THREE.Vector3(28, 6, 2),
        side: "right"
      }
    ]
  }
};

// --- Estado Global ---
const AppState = {
  currentSubject: 'ciencias',
  currentLayer: 'persona',
  studyMode: 'quiz',
  soundEnabled: true,
  autoRotate: false,
  score: 0,
  solvedItems: {},
  medals: {}
};

function loadProgress() {
  try {
    const saved = localStorage.getItem('estudio_jimena_data');
    if (saved) {
      const data = JSON.parse(saved);
      AppState.solvedItems = data.solvedItems || {};
      AppState.score = data.score || 0;
      AppState.medals = data.medals || {};
    }
  } catch (e) {
    console.warn("Storage warning:", e);
  }
  Object.keys(ANATOMY_DATA).forEach(layer => {
    if (!AppState.solvedItems[layer]) {
      AppState.solvedItems[layer] = [];
    }
  });
  updateScoreUI();
}

function saveProgress() {
  try {
    localStorage.setItem('estudio_jimena_data', JSON.stringify({
      solvedItems: AppState.solvedItems,
      score: AppState.score,
      medals: AppState.medals
    }));
  } catch (e) {
    console.warn("Save error:", e);
  }
}

function normalizeString(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

function isAnswerCorrect(userInput, item) {
  const normInput = normalizeString(userInput);
  if (!normInput) return false;
  return item.aliases.some(alias => normalizeString(alias) === normInput);
}

// --- Audio & Voz ---
class AudioController {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSuccessChime() {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.4);
    });
  }

  playFanfare() {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.15 },
      { f: 1046.50, d: 0.45 }
    ];
    let time = this.ctx.currentTime;
    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.f, time);
      gain.gain.setValueAtTime(0.25, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + n.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + n.d);
      time += n.d * 0.85;
    });
  }

  playWrongSound() {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  speak(text) {
    if (!AppState.soundEnabled || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 1.0;
      utterance.pitch = 1.15;
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(v => v.lang.startsWith('es') && (v.name.includes('Monica') || v.name.includes('Elena') || v.name.includes('Laura') || v.name.includes('Google') || v.name.includes('Spanish')));
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech error:", e);
    }
  }
}

const audio = new AudioController();

// --- Motor 3D con Enfoque Selectivo de Músculos y Placas de Sentidos ---
class Anatomy3DEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.models = {
      persona: null,
      huesos: null,
      musculos_del: null,
      musculos_tras: null,
      ojo: null,
      oido: null
    };

    this.isTransitioning = false;
    this.loader = new THREE.GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight - 145);

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(0, 12, 225);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.minDistance = 25;
    this.controls.maxDistance = 450;
    this.controls.maxPolarAngle = Math.PI / 1.05;
    this.controls.minPolarAngle = 0.05;
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };

    // Previene scroll vertical no deseado al interactuar con el 3D
    this.renderer.domElement.style.touchAction = 'none';

    this.setupLighting();
    this.loadAllModels();

    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onWindowResize(), 150);
    });

    // Distingue entre arrastrar para girar 3D y tocar para pulsar una parte
    let pointerDownPos = { x: 0, y: 0 };
    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });
    this.renderer.domElement.addEventListener('pointerup', (e) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist < 8) {
        this.onCanvasClick(e);
      }
    });

    this.animate();
  }

  setupLighting() {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x475569, 0.7);
    this.scene.add(hemiLight);

    const mainLight = new THREE.DirectionalLight(0xfff8ee, 0.7);
    mainLight.position.set(45, 80, 70);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xcfd8dc, 0.45);
    fillLight.position.set(-50, 40, -40);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 0.3);
    rimLight.position.set(0, -60, 40);
    this.scene.add(rimLight);

    // Sombra de contacto en el suelo
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(71, 85, 105, 0.35)');
    grad.addColorStop(0.5, 'rgba(71, 85, 105, 0.12)');
    grad.addColorStop(1, 'rgba(71, 85, 105, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const shadowGeo = new THREE.PlaneGeometry(85, 85);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(canvas),
      transparent: true,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -76;
    this.scene.add(shadowMesh);
  }

  loadAllModels() {
    const overlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');

    const bodyConfigs = [
      { key: 'persona', path: 'models/jimena.glb', targetHeight: 150, offsetY: 0 },
      { key: 'huesos', path: 'models/skeleton.glb', targetHeight: 150, offsetY: 0, materialType: 'bone' },
      { key: 'musculos', path: 'models/muscles.glb', targetHeight: 150, offsetY: 0, materialType: 'muscle' }
    ];

    let loadedCount = 0;
    const totalToLoad = bodyConfigs.length + 2;

    const onAssetLoaded = (name) => {
      loadedCount++;
      if (loadingText) {
        loadingText.innerText = `Cargando 3D interactivo (${loadedCount}/${totalToLoad})...`;
      }
      if (loadedCount >= totalToLoad && overlay) {
        overlay.classList.add('hidden');
        this.updateLayerVisibility(AppState.currentLayer);
      }
    };

    bodyConfigs.forEach(cfg => {
      this.loader.load(
        cfg.path,
        (gltf) => {
          const model = gltf.scene;
          const bbox = new THREE.Box3().setFromObject(model);
          const size = bbox.getSize(new THREE.Vector3());
          const center = bbox.getCenter(new THREE.Vector3());

          const scaleFactor = cfg.targetHeight / (size.y || 1);
          model.scale.set(scaleFactor, scaleFactor, scaleFactor);

          model.position.x = -center.x * scaleFactor;
          model.position.y = -center.y * scaleFactor + cfg.offsetY;
          model.position.z = -center.z * scaleFactor;

          if (cfg.key === 'persona') {
            model.traverse((child) => {
              if (child.isMesh && child.material) {
                child.castShadow = true;
                child.receiveShadow = true;
                // Acabado mate fotográfico sin brillos plásticos excesivos
                child.material.roughness = Math.max(0.65, child.material.roughness || 0.65);
                child.material.metalness = Math.min(0.05, child.material.metalness || 0.0);
                if (child.material.map) {
                  child.material.map.encoding = THREE.sRGBEncoding;
                  child.material.map.needsUpdate = true;
                }
              }
            });
            this.models.persona = model;
            this.scene.add(model);
          } else if (cfg.key === 'musculos') {
            // Músculos Delanteros: Solo en rojo los 5 delanteros preguntados
            this.models.musculos_del = model;
            this.applySelectiveMuscles(this.models.musculos_del, 'delanteros');

            // Músculos Traseros: Solo en rojo los 5 traseros preguntados
            this.models.musculos_tras = model.clone();
            this.applySelectiveMuscles(this.models.musculos_tras, 'traseros');

            this.scene.add(this.models.musculos_del);
            this.scene.add(this.models.musculos_tras);
          } else {
            this.applyBodyMaterials(model, cfg.materialType);
            this.models[cfg.key] = model;
            this.scene.add(model);
          }

          onAssetLoaded(cfg.key);
        },
        (xhr) => {
          if (xhr.lengthComputable && cfg.key === 'persona' && loadingText) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            loadingText.innerText = `Cargando el modelo 3D de Jimena (${percent}%)...`;
          }
        },
        (err) => {
          console.warn("Fallo cargando " + cfg.path, err);
          onAssetLoaded(cfg.key);
        }
      );
    });

    // 3. Placas 3D de estudio anatómico con los cortes fieles del libro
    this.models.ojo = this.createAnatomyPlate('models/eye_diagram.jpg', 75, 56);
    this.scene.add(this.models.ojo);
    onAssetLoaded('ojo');

    this.models.oido = this.createAnatomyPlate('models/ear_diagram.jpg', 75, 56);
    this.scene.add(this.models.oido);
    onAssetLoaded('oido');
  }

  // Coloreado selectivo: SOLO en rojo vivo los músculos que se preguntan
  applySelectiveMuscles(model, side) {
    const frontTargetKeywords = ['frontalis', 'pector', 'biceps-brachii', 'rectus-abdominis', 'rectus-femoris', 'vastus'];
    const backTargetKeywords = ['deltoid', 'triceps-brachii', 'latissimus', 'glute', 'gastrocnemius'];
    const targets = (side === 'delanteros') ? frontTargetKeywords : backTargetKeywords;

    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || '').toLowerCase();
        const isTarget = targets.some(keyword => name.includes(keyword));

        if (isTarget) {
          // Músculo preguntado: Rojo anatómico brillante y destacado
          child.material = new THREE.MeshStandardMaterial({
            color: 0xef4444, // Rojo vivo
            roughness: 0.35,
            metalness: 0.1,
            side: THREE.DoubleSide
          });
        } else {
          // El resto del cuerpo: Silueta neutra suave y limpia (tono maniquí translúcido)
          child.material = new THREE.MeshStandardMaterial({
            color: 0xf0e9df,
            roughness: 0.65,
            transparent: true,
            opacity: 0.28,
            side: THREE.DoubleSide
          });
        }
      }
    });
  }

  createAnatomyPlate(imagePath, width, height) {
    const group = new THREE.Group();

    const texture = this.textureLoader.load(imagePath);
    texture.encoding = THREE.sRGBEncoding;

    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.05
    });

    const frontMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.25,
      metalness: 0.02
    });

    const materials = [frameMat, frameMat, frameMat, frameMat, frontMat, frameMat];
    const plateMesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, 2.5), materials);
    plateMesh.castShadow = true;
    plateMesh.receiveShadow = true;
    group.add(plateMesh);

    const borderGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(width + 0.2, height + 0.2, 2.6));
    const borderMat = new THREE.LineBasicMaterial({ color: 0xe2e8f0, linewidth: 2 });
    const wireframe = new THREE.LineSegments(borderGeo, borderMat);
    group.add(wireframe);

    return group;
  }

  applyBodyMaterials(model, type) {
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (type === 'bone') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xeae2cf,
            roughness: 0.38,
            metalness: 0.04,
            side: THREE.DoubleSide
          });
        } else if (type === 'skin') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xdfad88,
            roughness: 0.55,
            metalness: 0.02
          });
        }
      }
    });
  }

  updateLayerVisibility(layerKey) {
    Object.keys(this.models).forEach(key => {
      if (this.models[key]) {
        this.models[key].visible = (key === layerKey);
      }
    });

    const targetConfig = ANATOMY_DATA[layerKey];
    if (targetConfig) {
      this.smoothMoveCamera(targetConfig.cameraPos, targetConfig.cameraLookAt);
    }
  }

  smoothMoveCamera(targetPos, targetLookAt, duration = 800) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const endPos = new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z);
    const endTarget = new THREE.Vector3(targetLookAt.x, targetLookAt.y, targetLookAt.z);
    const startTime = performance.now();

    this.isTransitioning = true;

    const animateTransition = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      this.camera.position.lerpVectors(startPos, endPos, ease);
      this.controls.target.lerpVectors(startTarget, endTarget, ease);
      this.controls.update();

      if (progress < 1) {
        requestAnimationFrame(animateTransition);
      } else {
        this.isTransitioning = false;
      }
    };
    requestAnimationFrame(animateTransition);
  }

  highlightPart(partId) {
    const currentModel = this.models[AppState.currentLayer];
    if (!currentModel) return;

    const item = ANATOMY_DATA[AppState.currentLayer].items.find(i => i.id === partId);
    if (!item) return;

    currentModel.traverse((child) => {
      if (child.isMesh && child.material && !Array.isArray(child.material)) {
        const meshWorldPos = new THREE.Vector3();
        child.getWorldPosition(meshWorldPos);

        if (meshWorldPos.distanceTo(item.anchor3D) < 18) {
          const origColor = child.userData.origColor || child.material.color.getHex();
          child.userData.origColor = origColor;
          child.material.color.setHex(0x10b981);
          setTimeout(() => {
            if (child.material) child.material.color.setHex(origColor);
          }, 1500);
        }
      }
    });
  }

  onCanvasClick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const currentModel = this.models[AppState.currentLayer];
    if (!currentModel) return;

    const intersects = this.raycaster.intersectObjects(currentModel.children, true);
    if (intersects.length > 0) {
      // Si la pieza 3D tiene directamente asignada su parte anatómica (Cuerpo de Jimena)
      if (intersects[0].object.userData && intersects[0].object.userData.partId) {
        focusInputCard(intersects[0].object.userData.partId);
        return;
      }

      const hitPoint = intersects[0].point;
      const layerItems = ANATOMY_DATA[AppState.currentLayer].items;
      let closestItem = null;
      let minDistance = Infinity;

      layerItems.forEach(item => {
        const dist = hitPoint.distanceTo(item.anchor3D);
        if (dist < minDistance) {
          minDistance = dist;
          closestItem = item;
        }
      });

      if (closestItem && minDistance < 35) {
        focusInputCard(closestItem.id);
      }
    }
  }

  onWindowResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight - 145);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  toScreenPosition(vector3D) {
    const vector = vector3D.clone();
    vector.project(this.camera);

    const width = this.renderer.domElement.clientWidth;
    const height = this.renderer.domElement.clientHeight;

    return {
      x: (vector.x * 0.5 + 0.5) * width,
      y: (-(vector.y * 0.5) + 0.5) * height,
      visible: vector.z < 1.0
    };
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (AppState.autoRotate && !this.isTransitioning) {
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2.0;
    } else {
      this.controls.autoRotate = false;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    updateCalloutLinesAndMarkers();
  }
}

let engine3D = null;

// --- Gestor de UI y Tarjetas de Estudio ---

function renderLayerCards() {
  const currentLayer = AppState.currentLayer;
  const layerData = ANATOMY_DATA[currentLayer];
  if (!layerData) return;

  const panelLeft = document.getElementById('panel-left');
  const panelRight = document.getElementById('panel-right');
  panelLeft.innerHTML = '';
  panelRight.innerHTML = '';

  const solvedList = AppState.solvedItems[currentLayer] || [];

  layerData.items.forEach((item, index) => {
    const isSolved = solvedList.includes(item.id) || AppState.studyMode === 'study';

    const card = document.createElement('div');
    card.className = `anatomy-card ${isSolved ? 'success' : ''}`;
    card.id = `card-${item.id}`;
    card.setAttribute('data-id', item.id);
    card.style.order = index; // Mantiene el orden 1, 2, 3... en pantallas móviles

    let contentHtml = `
      <div class="card-header">
        <span class="card-badge-num">#${index + 1}</span>
        <button class="card-hint-btn" title="Pista de voz / Ayuda (Clic para mostrar u ocultar)" onclick="playVoiceHint('${item.id}', event)">💡</button>
      </div>
    `;

    if (isSolved) {
      contentHtml += `
        <div class="card-solved-label">
          <span>${item.name}</span>
          <span class="check-icon">✓</span>
        </div>
        <div class="card-desc">${item.desc}</div>
      `;
    } else {
      contentHtml += `
        <div class="card-input-row">
          <input type="text" class="card-input" placeholder="¿Cómo se llama?" autocomplete="off" spellcheck="false"
                 enterkeyhint="done" autocorrect="off" autocapitalize="none"
                 onkeydown="handleCardInputKey(event, '${item.id}')" onfocus="handleCardFocus('${item.id}')">
          <button class="btn-icon" style="width:36px;height:36px;font-size:15px;" onclick="checkCardAnswer('${item.id}')">➜</button>
        </div>
        <div class="card-hint-text" id="hint-text-${item.id}" style="display:none;"></div>
      `;
    }

    card.innerHTML = contentHtml;

    if (item.side === 'left') {
      panelLeft.appendChild(card);
    } else {
      panelRight.appendChild(card);
    }
  });

  updateCountersUI();
  rebuildMarkers();
}

function rebuildMarkers() {
  const markersLayer = document.getElementById('markers-layer');
  markersLayer.innerHTML = '';

  const currentLayer = AppState.currentLayer;
  const layerData = ANATOMY_DATA[currentLayer];
  if (!layerData) return;

  const solvedList = AppState.solvedItems[currentLayer] || [];

  layerData.items.forEach((item, index) => {
    const isSolved = solvedList.includes(item.id);
    const marker = document.createElement('div');
    marker.className = `scene-marker ${isSolved ? 'solved' : ''}`;
    marker.id = `marker-${item.id}`;
    marker.innerText = index + 1;
    marker.title = isSolved ? item.name : "Haz clic para escribir";
    marker.addEventListener('click', () => {
      focusInputCard(item.id);
    });
    markersLayer.appendChild(marker);
  });
}

function updateCalloutLinesAndMarkers() {
  if (!engine3D) return;

  const currentLayer = AppState.currentLayer;
  const layerData = ANATOMY_DATA[currentLayer];
  if (!layerData) return;

  const svg = document.getElementById('svg-overlay');
  if (!svg) return;

  const isMobile = window.innerWidth <= 860;
  const solvedList = AppState.solvedItems[currentLayer] || [];
  let svgLines = '';

  layerData.items.forEach(item => {
    const screenPos = engine3D.toScreenPosition(item.anchor3D);
    const marker = document.getElementById(`marker-${item.id}`);
    const card = document.getElementById(`card-${item.id}`);

    if (marker) {
      if (screenPos.visible && screenPos.x > 0 && screenPos.x < window.innerWidth && screenPos.y > 0 && screenPos.y < window.innerHeight) {
        marker.style.display = 'flex';
        marker.style.left = `${screenPos.x}px`;
        marker.style.top = `${screenPos.y}px`;
      } else {
        marker.style.display = 'none';
      }
    }

    // En pantallas de móvil no trazamos líneas diagonales para mantener la interfaz limpia
    if (!isMobile && card && marker && marker.style.display !== 'none') {
      const cardRect = card.getBoundingClientRect();
      const stageRect = document.getElementById('stage-wrapper').getBoundingClientRect();

      let cardX = (item.side === 'left') ? (cardRect.right - stageRect.left) : (cardRect.left - stageRect.left);
      let cardY = cardRect.top - stageRect.top + cardRect.height / 2;

      const isSolved = solvedList.includes(item.id) || AppState.studyMode === 'study';
      const lineClass = isSolved ? 'pointer-line success' : 'pointer-line';

      svgLines += `
        <line x1="${screenPos.x}" y1="${screenPos.y}" x2="${cardX}" y2="${cardY}" class="${lineClass}" />
      `;
    }
  });

  svg.innerHTML = svgLines;
}

function handleCardInputKey(event, itemId) {
  if (event.key === 'Enter') {
    checkCardAnswer(itemId);
  }
}

function handleCardFocus(itemId) {
  document.querySelectorAll('.anatomy-card').forEach(c => c.classList.remove('focused'));
  const card = document.getElementById(`card-${itemId}`);
  if (card) card.classList.add('focused');

  document.querySelectorAll('.scene-marker').forEach(m => m.classList.remove('active'));
  const marker = document.getElementById(`marker-${itemId}`);
  if (marker) marker.classList.add('active');
}

function focusInputCard(itemId) {
  handleCardFocus(itemId);
  const card = document.getElementById(`card-${itemId}`);
  if (card) {
    card.classList.remove('pulse-card');
    void card.offsetWidth;
    card.classList.add('pulse-card');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    const input = card.querySelector('input');
    if (input) {
      input.focus();
    }
  }
  const item = ANATOMY_DATA[AppState.currentLayer].items.find(i => i.id === itemId);
  if (item && AppState.studyMode === 'study') {
    audio.speak(`${item.name}. ${item.desc}`);
  }
}

function checkCardAnswer(itemId) {
  const card = document.getElementById(`card-${itemId}`);
  if (!card) return;
  const input = card.querySelector('input');
  if (!input) return;

  const val = input.value;
  const layerData = ANATOMY_DATA[AppState.currentLayer];
  const item = layerData.items.find(i => i.id === itemId);
  if (!item) return;

  if (isAnswerCorrect(val, item)) {
    AppState.solvedItems[AppState.currentLayer].push(itemId);
    AppState.score += 10;
    saveProgress();

    if (engine3D) {
      engine3D.highlightPart(itemId);
    }

    audio.playSuccessChime();
    triggerMiniConfetti(card);

    showToast(`¡Muy bien hecho, Jimena! 🎉 Has acertado: ${item.name}`);
    audio.speak(`¡Muy bien hecho, Jimena! ${item.name}.`);

    renderLayerCards();
    checkLayerCompletion();
  } else {
    input.classList.add('shake');
    audio.playWrongSound();
    setTimeout(() => input.classList.remove('shake'), 500);

    const hintEl = document.getElementById(`hint-text-${itemId}`);
    if (hintEl) {
      hintEl.innerText = `💡 Pista: empieza por "${item.name.charAt(0)}" y tiene ${item.name.length} letras.`;
      hintEl.style.display = 'block';
    }
  }
}

// Pista conmutada (Toggle)
function playVoiceHint(itemId, event) {
  if (event) event.stopPropagation();
  const layerData = ANATOMY_DATA[AppState.currentLayer];
  const item = layerData.items.find(i => i.id === itemId);
  if (!item) return;

  const hintEl = document.getElementById(`hint-text-${itemId}`);
  if (!hintEl) return;

  if (hintEl.style.display === 'block') {
    hintEl.style.display = 'none';
    return;
  }

  hintEl.innerText = `💡 Pista: empieza por "${item.name.charAt(0)}" (${item.name.length} letras).`;
  hintEl.style.display = 'block';

  const isSolved = AppState.solvedItems[AppState.currentLayer].includes(itemId);
  if (isSolved || AppState.studyMode === 'study') {
    audio.speak(`${item.name}. ${item.desc}`);
  } else {
    audio.speak(`Pista para Jimena: empieza por la letra ${item.name.charAt(0)}.`);
  }
}

function checkLayerCompletion() {
  const currentLayer = AppState.currentLayer;
  const layerData = ANATOMY_DATA[currentLayer];
  const solvedList = AppState.solvedItems[currentLayer];

  if (solvedList.length >= layerData.items.length) {
    AppState.medals[currentLayer] = true;
    saveProgress();
    updateMedalsUI();

    setTimeout(() => {
      audio.playFanfare();
      triggerGrandConfetti();
      openCelebrationModal(layerData.title);
    }, 400);
  }
}

function triggerMiniConfetti(element) {
  if (typeof confetti === 'function') {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y }
    });
  }
}

function triggerGrandConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  container.innerHTML = `<div class="toast"><span>✨</span> ${message}</div>`;
  setTimeout(() => {
    container.innerHTML = '';
  }, 2800);
}

function openCelebrationModal(layerTitle) {
  const modal = document.getElementById('celebration-modal');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');

  title.innerText = `¡Enhorabuena, Jimena! 🌟`;
  desc.innerText = `Has completado al 100% "${layerTitle}". ¡Acabas de ganar una nueva medalla en tu vitrina de trofeos!`;
  modal.classList.add('active');
}

function updateScoreUI() {
  const scoreEl = document.getElementById('total-score');
  if (scoreEl) scoreEl.innerText = AppState.score;
}

function updateCountersUI() {
  Object.keys(ANATOMY_DATA).forEach(layerKey => {
    const badge = document.getElementById(`badge-count-${layerKey}`);
    if (badge) {
      const total = ANATOMY_DATA[layerKey].items.length;
      const solved = (AppState.solvedItems[layerKey] || []).length;
      badge.innerText = `${solved}/${total}`;
    }
    const modalBadge = document.getElementById(`reset-badge-${layerKey}`);
    if (modalBadge) {
      const total = ANATOMY_DATA[layerKey].items.length;
      const solved = (AppState.solvedItems[layerKey] || []).length;
      modalBadge.innerText = `${solved}/${total}`;
    }
  });
  updateScoreUI();
}

function updateMedalsUI() {
  Object.keys(AppState.medals).forEach(medalKey => {
    const card = document.getElementById(`medal-${medalKey}`);
    if (card && AppState.medals[medalKey]) {
      card.classList.add('unlocked');
    }
  });
  const allFive = ['huesos', 'musculos_del', 'musculos_tras', 'ojo', 'oido'].every(k => AppState.medals[k]);
  const masterCard = document.getElementById('medal-master');
  if (masterCard && allFive) {
    masterCard.classList.add('unlocked');
  }
}

// Menú interactivo de reseteo a 0
function openResetModal() {
  const modal = document.getElementById('reset-modal');
  const curLabel = document.getElementById('reset-opt-current-label');
  const curTitle = ANATOMY_DATA[AppState.currentLayer] ? ANATOMY_DATA[AppState.currentLayer].title : "Lámina actual";
  const curCount = (AppState.solvedItems[AppState.currentLayer] || []).length;
  const curTotal = ANATOMY_DATA[AppState.currentLayer] ? ANATOMY_DATA[AppState.currentLayer].items.length : 0;
  
  if (curLabel) {
    curLabel.innerText = `Lámina que estás viendo: "${curTitle}" (${curCount}/${curTotal})`;
  }
  updateCountersUI();
  modal.classList.add('active');
}

function closeResetModal() {
  document.getElementById('reset-modal').classList.remove('active');
}

function executeReset(target) {
  if (target === 'current') {
    target = AppState.currentLayer;
  }

  if (target === 'all') {
    // Resetear todo
    Object.keys(ANATOMY_DATA).forEach(k => {
      AppState.solvedItems[k] = [];
    });
    AppState.score = 0;
    AppState.medals = {};
    saveProgress();
    renderLayerCards();
    updateMedalsUI();
    showToast(`¡Todo el cuaderno se ha reiniciado a 0! ¡Ánimo Jimena! 🌟`);
  } else if (ANATOMY_DATA[target]) {
    AppState.solvedItems[target] = [];
    saveProgress();
    renderLayerCards();
    showToast(`¡"${ANATOMY_DATA[target].title}" reiniciado a 0! 🚀`);
  }

  audio.playSuccessChime();
  closeResetModal();
}

function setupEventListeners() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-subject');
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.getElementById('view-ciencias').style.display = (subject === 'ciencias') ? 'flex' : 'none';
      document.querySelectorAll('.subject-page').forEach(page => page.classList.remove('active'));

      if (subject !== 'ciencias') {
        const targetView = document.getElementById(`view-${subject}`);
        if (targetView) targetView.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.layer-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const layer = chip.getAttribute('data-layer');
      document.querySelectorAll('.layer-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      AppState.currentLayer = layer;
      if (engine3D) {
        engine3D.updateLayerVisibility(layer);
      }
      renderLayerCards();
    });
  });

  const btnQuiz = document.getElementById('btn-mode-quiz');
  const btnStudy = document.getElementById('btn-mode-study');
  btnQuiz.addEventListener('click', () => {
    btnQuiz.classList.add('active');
    btnStudy.classList.remove('active');
    AppState.studyMode = 'quiz';
    renderLayerCards();
  });
  btnStudy.addEventListener('click', () => {
    btnStudy.classList.add('active');
    btnQuiz.classList.remove('active');
    AppState.studyMode = 'study';
    renderLayerCards();
  });

  // BOTÓN DE REINICIAR A 0 (Abre el menú selector)
  const btnReset = document.getElementById('btn-reset-layer');
  if (btnReset) {
    btnReset.addEventListener('click', openResetModal);
  }

  document.querySelectorAll('.reset-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-reset');
      executeReset(target);
    });
  });

  document.getElementById('btn-cancel-reset').addEventListener('click', closeResetModal);

  document.getElementById('btn-cam-rotate').addEventListener('click', function () {
    AppState.autoRotate = !AppState.autoRotate;
    this.classList.toggle('active', AppState.autoRotate);
  });

  document.getElementById('btn-cam-front').addEventListener('click', () => {
    const config = ANATOMY_DATA[AppState.currentLayer];
    if (engine3D) {
      engine3D.smoothMoveCamera({ x: 0, y: config.cameraPos.y, z: Math.abs(config.cameraPos.z) }, config.cameraLookAt);
    }
  });

  document.getElementById('btn-cam-back').addEventListener('click', () => {
    const config = ANATOMY_DATA[AppState.currentLayer];
    if (engine3D) {
      engine3D.smoothMoveCamera({ x: 0, y: config.cameraPos.y, z: -Math.abs(config.cameraPos.z) }, config.cameraLookAt);
    }
  });

  document.getElementById('btn-cam-reset').addEventListener('click', () => {
    const config = ANATOMY_DATA[AppState.currentLayer];
    if (engine3D) {
      engine3D.smoothMoveCamera(config.cameraPos, config.cameraLookAt);
    }
  });

  document.getElementById('btn-cam-zoomin').addEventListener('click', () => {
    if (engine3D) {
      engine3D.camera.position.multiplyScalar(0.85);
      engine3D.controls.update();
    }
  });

  document.getElementById('btn-cam-zoomout').addEventListener('click', () => {
    if (engine3D) {
      engine3D.camera.position.multiplyScalar(1.15);
      engine3D.controls.update();
    }
  });

  const btnSound = document.getElementById('btn-sound-toggle');
  btnSound.addEventListener('click', () => {
    AppState.soundEnabled = !AppState.soundEnabled;
    btnSound.innerText = AppState.soundEnabled ? '🔊' : '🔇';
    btnSound.style.opacity = AppState.soundEnabled ? '1' : '0.5';
  });

  document.getElementById('btn-modal-close').addEventListener('click', () => {
    document.getElementById('celebration-modal').classList.remove('active');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  setupEventListeners();

  engine3D = new Anatomy3DEngine('three-canvas-container');

  renderLayerCards();
  updateMedalsUI();
});
