/**
 * ESTUDIO JIMENA 3D - MOTOR PEDAGÓGICO Y GAMIFICACIÓN (BESTKIDS ADAPTATION)
 * Asignaturas: Matemáticas, Lengua, Inglés y Sistema de Gamificación
 */

// --- Base de Datos Curricular de 5º de Primaria ---
const CURRICULUM_DATA = {
  matematicas: {
    title: "Mundo de los Números",
    icon: "📐",
    heroDesc: "¡Hola Jimena! Resuelve retos de cálculo, fracciones, geometría y problemas para subir de nivel.",
    units: [
      {
        id: "mat_1",
        title: "Cálculo y Operaciones Rápidas",
        icon: "⚡",
        desc: "Sumas, multiplicaciones con ceros, repartos y división.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuánto es 340 + 280?",
            options: ["620", "520", "610", "640"],
            answer: "620",
            explanation: "340 + 280 = 620. ¡Buen cálculo mental!"
          },
          {
            type: "true_false",
            question: "En la operación 45 × 100, el resultado es 4.500",
            answer: true,
            explanation: "¡Correcto! Al multiplicar por 100 se añaden dos ceros a la derecha."
          },
          {
            type: "matching",
            question: "Conecta cada multiplicación con su resultado correcto:",
            pairs: [
              { left: "8 × 7", right: "56" },
              { left: "9 × 6", right: "54" },
              { left: "7 × 7", right: "49" },
              { left: "12 × 5", right: "60" }
            ],
            explanation: "¡Tablas de multiplicar dominadas!"
          },
          {
            type: "fill_blanks",
            question: "Si tengo 24 caramelos y los reparto entre 6 amigos a partes iguales, cada amigo recibe ___ caramelos.",
            blankAnswer: "4",
            aliases: ["4", "cuatro"],
            explanation: "24 dividido entre 6 = 4 caramelos para cada uno."
          },
          {
            type: "multiple_choice",
            question: "En una división, si el dividendo es 45 y el divisor es 9, ¿cuál es el cociente?",
            options: ["5", "4", "6", "9"],
            answer: "5",
            explanation: "45 ÷ 9 = 5 exactamente."
          }
        ]
      },
      {
        id: "mat_2",
        title: "Fracciones y Números Decimales",
        icon: "🍕",
        desc: "Equivalencias, partes de la unidad y lectura decimal.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuál de estas fracciones es equivalente a 1/2 (la mitad)?",
            options: ["2/4", "2/3", "3/5", "1/4"],
            answer: "2/4",
            explanation: "2/4 es exactamente la mitad, igual que 1/2."
          },
          {
            type: "true_false",
            question: "La fracción 3/5 es mayor que 1/5.",
            answer: true,
            explanation: "¡Exacto! Con el mismo denominador, 3 partes es más que 1 parte."
          },
          {
            type: "matching",
            question: "Une cada fracción de peso con sus gramos:",
            pairs: [
              { left: "Medio kilo", right: "500 g" },
              { left: "Cuarto de kilo", right: "250 g" },
              { left: "Tres cuartos de kilo", right: "750 g" },
              { left: "Un kilo entero", right: "1.000 g" }
            ],
            explanation: "¡Equivalencias de peso perfectas!"
          },
          {
            type: "fill_blanks",
            question: "¿Cuánto es 2/7 + 3/7? Escribe solo el numerador resultante: ___/7",
            blankAnswer: "5",
            aliases: ["5", "cinco"],
            explanation: "Se suman los numeradores (2 + 3 = 5) y se mantiene el denominador 7."
          },
          {
            type: "multiple_choice",
            question: "¿Cómo se escribe en número decimal 'tres unidades y cinco décimas'?",
            options: ["3,5", "3,05", "0,35", "35"],
            answer: "3,5",
            explanation: "3 unidades y 5 décimas se escribe 3,5."
          }
        ]
      },
      {
        id: "mat_3",
        title: "Geometría y Medidas",
        icon: "📐",
        desc: "Polígonos, perímetros, ángulos y figuras planas.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuántos lados tiene un polígono llamado hexágono?",
            options: ["6 lados", "5 lados", "7 lados", "8 lados"],
            answer: "6 lados",
            explanation: "El prefijo hexa- significa 6 (6 lados y 6 vértices)."
          },
          {
            type: "true_false",
            question: "Un triángulo equilátero tiene sus tres lados exactamente iguales.",
            answer: true,
            explanation: "¡Correcto! Equilátero = lados iguales."
          },
          {
            type: "matching",
            question: "Une cada figura con su número de lados:",
            pairs: [
              { left: "Triángulo", right: "3 lados" },
              { left: "Cuadrilátero", right: "4 lados" },
              { left: "Pentágono", right: "5 lados" },
              { left: "Octógono", right: "8 lados" }
            ],
            explanation: "¡Clasificación geométrica impecable!"
          },
          {
            type: "fill_blanks",
            question: "Un cuadrado mide 5 cm en cada lado. Su perímetro total es de ___ cm.",
            blankAnswer: "20",
            aliases: ["20", "veinte"],
            explanation: "El perímetro es la suma de sus 4 lados: 5 + 5 + 5 + 5 = 20 cm."
          },
          {
            type: "multiple_choice",
            question: "¿Qué tipo de ángulo mide exactamente 90 grados?",
            options: ["Ángulo Recto", "Ángulo Agudo", "Ángulo Obtuso", "Ángulo Llano"],
            answer: "Ángulo Recto",
            explanation: "El ángulo recto mide exactamente 90º (como la esquina de un libro)."
          }
        ]
      }
    ]
  },

  lengua: {
    title: "Reino de las Letras",
    icon: "📖",
    heroDesc: "Acentuación, tipos de palabras, ortografía y vocabulario para dominar la lengua española.",
    units: [
      {
        id: "len_1",
        title: "Reglas de Acentuación",
        icon: "✍️",
        desc: "Palabras agudas, llanas y esdrújulas con sus tildes.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿En qué posición llevan la sílaba tónica (fuerte) las palabras agudas?",
            options: ["En la última sílaba", "En la penúltima sílaba", "En la antepenúltima sílaba"],
            answer: "En la última sílaba",
            explanation: "Las agudas tienen la fuerza en la última sílaba (ej. ba-lón)."
          },
          {
            type: "true_false",
            question: "Las palabras esdrújulas SIEMPRE llevan tilde.",
            answer: true,
            explanation: "¡Verdadero! Todas las palabras esdrújulas llevan tilde sin excepción (música, pájaro)."
          },
          {
            type: "matching",
            question: "Clasifica cada palabra según su sílaba tónica:",
            pairs: [
              { left: "Camión", right: "Aguda" },
              { left: "Ventana", right: "Llana" },
              { left: "Plátano", right: "Esdrújula" },
              { left: "Compás", right: "Aguda" }
            ],
            explanation: "¡Excelente dominio de las reglas de acentuación!"
          },
          {
            type: "fill_blanks",
            question: "La palabra 'lámpara' lleva tilde porque su fuerza recae en la antepenúltima sílaba, por tanto es una palabra ___.",
            blankAnswer: "esdrújula",
            aliases: ["esdrujula", "esdrújula"],
            explanation: "Lám-pa-ra es una palabra esdrújula."
          },
          {
            type: "multiple_choice",
            question: "¿Cuál de estas palabras es LLANA?",
            options: ["Árbol", "Corazón", "Café", "Semáforo"],
            answer: "Árbol",
            explanation: "Ár-bol lleva la fuerza en la penúltima sílaba, por lo que es llana."
          }
        ]
      },
      {
        id: "len_2",
        title: "Gramática y Clases de Palabras",
        icon: "🏷️",
        desc: "Sustantivos, adjetivos, verbos y pronombres.",
        questions: [
          {
            type: "multiple_choice",
            question: "En la frase 'El perro cariñoso juega en el parque', ¿cuál es el ADJETIVO?",
            options: ["Cariñoso", "Perro", "Juega", "Parque"],
            answer: "Cariñoso",
            explanation: "'Cariñoso' describe cómo es el perro, por tanto es un adjetivo calificativo."
          },
          {
            type: "true_false",
            question: "'Correr', 'saltar' y 'estudiar' son verbos en forma infinitivo.",
            answer: true,
            explanation: "¡Verdadero! Los infinitivos terminan en -ar, -er o -ir."
          },
          {
            type: "matching",
            question: "Une cada palabra con su categoría gramatical:",
            pairs: [
              { left: "Madrid", right: "Sustantivo propio" },
              { left: "Brillante", right: "Adjetivo" },
              { left: "Nosotros", right: "Pronombre" },
              { left: "Escribir", right: "Verbo" }
            ],
            explanation: "¡Categorías gramaticales identificadas a la perfección!"
          },
          {
            type: "fill_blanks",
            question: "El femenino del sustantivo 'actor' es ___.",
            blankAnswer: "actriz",
            aliases: ["actriz", "la actriz"],
            explanation: "El femenino de actor es actriz."
          },
          {
            type: "multiple_choice",
            question: "¿Qué tipo de palabra es 'rápido' en la frase 'El coche rápido ganó'?",
            options: ["Adjetivo", "Sustantivo", "Verbo", "Artículo"],
            answer: "Adjetivo",
            explanation: "Indica una cualidad del coche (adjetivo)."
          }
        ]
      },
      {
        id: "len_3",
        title: "Ortografía y Vocabulario",
        icon: "💡",
        desc: "Sinónimos, antónimos, reglas de la B/V y la H.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuál es el SINÓNIMO de la palabra 'feliz'?",
            options: ["Alegre", "Triste", "Enojado", "Cansado"],
            answer: "Alegre",
            explanation: "Feliz y alegre tienen un significado semejante."
          },
          {
            type: "true_false",
            question: "El antónimo (lo contrario) de 'subir' es 'bajar'.",
            answer: true,
            explanation: "¡Verdadero! Los antónimos expresan ideas opuestas."
          },
          {
            type: "matching",
            question: "Conecta cada palabra con su ANTÓNIMO (opuesto):",
            pairs: [
              { left: "Grande", right: "Pequeño" },
              { left: "Luz", right: "Oscuridad" },
              { left: "Rápido", right: "Lento" },
              { left: "Valiente", right: "Cobarde" }
            ],
            explanation: "¡Gran dominio de vocabulario y antónimos!"
          },
          {
            type: "fill_blanks",
            question: "Los verbos terminados en -bir se escriben con b (como escribir), por ejemplo: re___ir.",
            blankAnswer: "recibir",
            aliases: ["recibir"],
            explanation: "Recibir termina en -bir y se escribe con b."
          },
          {
            type: "multiple_choice",
            question: "¿Cuál de estas palabras está escrita de forma CORRECTA?",
            options: ["Habitación", "Abitacion", "Havitación", "Avitación"],
            answer: "Habitación",
            explanation: "Habitación se escribe con H inicial, B y tilde en la O."
          }
        ]
      }
    ]
  },

  ingles: {
    title: "English Practice 5th Grade",
    icon: "🇬🇧",
    heroDesc: "Body parts, animals, daily routines and vocabulary with audio pronunciation for Jimena.",
    units: [
      {
        id: "ing_1",
        title: "The Human Body & Health",
        icon: "🦴",
        desc: "Body parts, actions and health words in English.",
        questions: [
          {
            type: "multiple_choice",
            question: "How do you say 'Cabeza' in English?",
            options: ["Head", "Hand", "Foot", "Arm"],
            answer: "Head",
            audioText: "Head",
            explanation: "Head means Cabeza in English!"
          },
          {
            type: "true_false",
            question: "The word 'Eyes' means 'Ojos' in Spanish.",
            answer: true,
            audioText: "The word Eyes means Ojos in Spanish.",
            explanation: "True! Two eyes to see the world."
          },
          {
            type: "matching",
            question: "Match the English body part with its Spanish meaning:",
            pairs: [
              { left: "Arm", right: "Brazo" },
              { left: "Leg", right: "Pierna" },
              { left: "Hand", right: "Mano" },
              { left: "Foot", right: "Pie" }
            ],
            explanation: "Great job! Body parts mastered in English!"
          },
          {
            type: "fill_blanks",
            question: "Complete the sentence: 'I see with my ___ (eyes / ears).'",
            blankAnswer: "eyes",
            aliases: ["eyes", "my eyes"],
            audioText: "I see with my eyes.",
            explanation: "We see with our eyes and listen with our ears."
          },
          {
            type: "multiple_choice",
            question: "Which of these body parts is on your leg?",
            options: ["Knee (Rodilla)", "Elbow (Codo)", "Nose (Nariz)", "Ear (Oreja)"],
            answer: "Knee (Rodilla)",
            audioText: "Knee",
            explanation: "The knee is in the middle of your leg."
          }
        ]
      },
      {
        id: "ing_2",
        title: "Animals & Nature",
        icon: "🦁",
        desc: "Animals, habitats and friendly descriptive sentences.",
        questions: [
          {
            type: "multiple_choice",
            question: "What animal says 'Woof' and is known as human's best friend?",
            options: ["Dog", "Cat", "Bird", "Horse"],
            answer: "Dog",
            audioText: "Dog",
            explanation: "Dog is a loyal friend!"
          },
          {
            type: "true_false",
            question: "A dolphin lives in the ocean and is a mammal.",
            answer: true,
            audioText: "A dolphin lives in the ocean.",
            explanation: "True! Dolphins are clever sea mammals."
          },
          {
            type: "matching",
            question: "Match each animal with its Spanish name:",
            pairs: [
              { left: "Lion", right: "León" },
              { left: "Bear", right: "Oso" },
              { left: "Eagle", right: "Águila" },
              { left: "Shark", right: "Tiburón" }
            ],
            explanation: "Super animal vocabulary!"
          },
          {
            type: "fill_blanks",
            question: "Complete: 'She ___ (likes / like) playing with her cat.'",
            blankAnswer: "likes",
            aliases: ["likes"],
            audioText: "She likes playing with her cat.",
            explanation: "In Present Simple with 'she', we add -s to the verb (likes)."
          },
          {
            type: "multiple_choice",
            question: "What color is the grass (hierba) in nature?",
            options: ["Green", "Blue", "Red", "Pink"],
            answer: "Green",
            audioText: "Green",
            explanation: "Grass is bright green!"
          }
        ]
      }
    ]
  }
};

// --- Sistema de Gamificación y Recompensas (BestKids System) ---
const BestKidsGamification = {
  // Marcos de Avatar disponibles en la tienda
  frames: [
    { id: "frame-novato", name: "Marco Novato", icon: "🥉", cost: 0, unlocked: true, color: "#94a3b8" },
    { id: "frame-explorador", name: "Marco Explorador Azul", icon: "💎", cost: 250, unlocked: false, color: "#0ea5e9" },
    { id: "frame-cientifico", name: "Marco Esmeralda 3D", icon: "🌿", cost: 600, unlocked: false, color: "#10b981" },
    { id: "frame-oro", name: "Marco Oro Campeona", icon: "🏆", cost: 1200, unlocked: false, color: "#f59e0b" },
    { id: "frame-arcoiris", name: "Aura Mágica Arcoíris", icon: "🌈", cost: 2000, unlocked: false, color: "#a855f7" },
    { id: "frame-corona", name: "Corona Real de Jimena", icon: "👑", cost: 3500, unlocked: false, color: "#ec4899" }
  ],

  // Títulos por Nivel
  levelTitles: [
    { level: 1, title: "Estudiante Novata", minXP: 0 },
    { level: 2, title: "Exploradora de 5º", minXP: 500 },
    { level: 3, title: "Ninja del Estudio", minXP: 1200 },
    { level: 4, title: "Científica Maestra 3D", minXP: 2200 },
    { level: 5, title: "Leyenda Escolar", minXP: 3500 }
  ],

  // Inicializar o cargar racha
  checkStreak() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastDate = localStorage.getItem('jimena_last_active_date');
      let streak = parseInt(localStorage.getItem('jimena_streak_days') || '1', 10);

      if (lastDate) {
        const last = new Date(lastDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Día consecutivo -> Racha aumenta
          streak += 1;
        } else if (diffDays > 1) {
          // Se rompió la racha
          streak = 1;
        }
      }

      localStorage.setItem('jimena_last_active_date', today);
      localStorage.setItem('jimena_streak_days', streak.toString());
      return streak;
    } catch (e) {
      return 1;
    }
  },

  getStreak() {
    return parseInt(localStorage.getItem('jimena_streak_days') || '1', 10);
  },

  // Multiplicador de puntos por racha (hasta +50%)
  getStreakMultiplier() {
    const s = this.getStreak();
    return 1 + Math.min(s * 0.1, 0.5);
  },

  // Obtener info de nivel según puntos acumulados
  getLevelInfo(score) {
    let current = this.levelTitles[0];
    let next = this.levelTitles[1];

    for (let i = 0; i < this.levelTitles.length; i++) {
      if (score >= this.levelTitles[i].minXP) {
        current = this.levelTitles[i];
        next = this.levelTitles[i + 1] || null;
      }
    }

    const min = current.minXP;
    const max = next ? next.minXP : min + 1000;
    const currentLevelXP = score - min;
    const neededXP = max - min;
    const progress = Math.min(100, Math.round((currentLevelXP / neededXP) * 100));

    return {
      level: current.level,
      title: current.title,
      progress,
      currentLevelXP,
      neededXP,
      nextTitle: next ? next.title : "¡Nivel Máximo!"
    };
  },

  // Marcos de Avatar comprados/desbloqueados
  getUnlockedFrames() {
    try {
      const saved = JSON.parse(localStorage.getItem('jimena_unlocked_frames') || '[]');
      return ['frame-novato', ...saved];
    } catch (e) {
      return ['frame-novato'];
    }
  },

  getActiveFrame() {
    return localStorage.getItem('jimena_active_frame') || 'frame-novato';
  },

  setActiveFrame(frameId) {
    localStorage.setItem('jimena_active_frame', frameId);
    this.applyActiveFrameUI();
  },

  unlockFrame(frameId) {
    const list = this.getUnlockedFrames();
    if (!list.includes(frameId)) {
      list.push(frameId);
      localStorage.setItem('jimena_unlocked_frames', JSON.stringify(list));
    }
    this.setActiveFrame(frameId);
  },

  applyActiveFrameUI() {
    const frameId = this.getActiveFrame();
    const avatar = document.querySelector('.avatar-jimena');
    if (avatar) {
      avatar.className = `avatar-jimena ${frameId}`;
    }
  }
};

// --- Motor Interactivo de Ejercicios (ExerciseEngine Runner) ---
const ExerciseRunner = {
  currentSubject: null,
  currentUnit: null,
  currentIndex: 0,
  scoreEarned: 0,
  userSelectedPairs: [],
  selectedLeftPair: null,

  startUnit(subjectKey, unitIndex) {
    const subject = CURRICULUM_DATA[subjectKey];
    if (!subject || !subject.units[unitIndex]) return;

    this.currentSubject = subjectKey;
    this.currentUnit = subject.units[unitIndex];
    this.currentIndex = 0;
    this.scoreEarned = 0;

    const modal = document.getElementById('exercise-modal');
    if (!modal) return;

    modal.classList.add('active');
    this.renderQuestion();
  },

  close() {
    const modal = document.getElementById('exercise-modal');
    if (modal) modal.classList.remove('active');
  },

  renderQuestion() {
    const unit = this.currentUnit;
    const q = unit.questions[this.currentIndex];
    const total = unit.questions.length;

    // Actualizar encabezados
    document.getElementById('ex-subject-tag').innerText = `${CURRICULUM_DATA[this.currentSubject].icon} ${CURRICULUM_DATA[this.currentSubject].title}`;
    document.getElementById('ex-unit-title').innerText = `${unit.title} (${this.currentIndex + 1}/${total})`;

    // Renderizar puntitos de progreso
    const dotsContainer = document.getElementById('ex-progress-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      dot.className = `progress-dot ${i < this.currentIndex ? 'done' : ''} ${i === this.currentIndex ? 'active' : ''}`;
      dotsContainer.appendChild(dot);
    }

    // Resetear footer de feedback
    const footer = document.getElementById('exercise-footer');
    footer.className = 'exercise-footer';
    document.getElementById('feedback-msg').innerHTML = '';
    const nextBtn = document.getElementById('btn-next-exercise');
    nextBtn.style.display = 'none';

    // Construir contenido según la mecánica del ejercicio
    const body = document.getElementById('exercise-body');
    body.innerHTML = '';

    const qCard = document.createElement('div');
    qCard.className = 'exercise-q-card';

    // Cabecera de la pregunta con botón de voz
    const qHeader = document.createElement('div');
    qHeader.className = 'q-header';
    qHeader.innerHTML = `
      <div class="q-title-wrap">
        <span class="q-badge">Pregunta #${this.currentIndex + 1}</span>
        <button class="btn-read-aloud" id="btn-audio-q" title="Escuchar en voz alta">🔊 Escuchar</button>
      </div>
      <h2 class="q-statement">${q.question}</h2>
    `;
    qCard.appendChild(qHeader);

    // Click en escuchar voz
    setTimeout(() => {
      const audioBtn = document.getElementById('btn-audio-q');
      if (audioBtn) {
        audioBtn.onclick = () => {
          this.speak(q.audioText || q.question, this.currentSubject === 'ingles' ? 'en-US' : 'es-ES');
        };
      }
    }, 50);

    // Mecánica interactiva específica
    const mechanicsContainer = document.createElement('div');
    mechanicsContainer.className = 'mechanics-wrap';

    if (q.type === 'multiple_choice') {
      mechanicsContainer.appendChild(this.buildMultipleChoice(q));
    } else if (q.type === 'true_false') {
      mechanicsContainer.appendChild(this.buildTrueFalse(q));
    } else if (q.type === 'matching') {
      mechanicsContainer.appendChild(this.buildMatching(q));
    } else if (q.type === 'fill_blanks') {
      mechanicsContainer.appendChild(this.buildFillBlanks(q));
    }

    qCard.appendChild(mechanicsContainer);
    body.appendChild(qCard);
  },

  buildMultipleChoice(q) {
    const grid = document.createElement('div');
    grid.className = 'options-grid-2x2';

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn-option opt-color-${idx % 4}`;
      btn.innerHTML = `<span class="opt-letter">${['A', 'B', 'C', 'D'][idx]}</span> <span>${optText}</span>`;
      btn.onclick = () => {
        grid.querySelectorAll('button').forEach(b => b.disabled = true);
        const isCorrect = (optText === q.answer);
        if (isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
          // Resaltar la correcta
          grid.querySelectorAll('button').forEach(b => {
            if (b.innerText.includes(q.answer)) b.classList.add('correct');
          });
        }
        this.handleAnswerResult(isCorrect, q.explanation);
      };
      grid.appendChild(btn);
    });

    return grid;
  },

  buildTrueFalse(q) {
    const wrap = document.createElement('div');
    wrap.className = 'tf-buttons-wrap';

    const btnTrue = document.createElement('button');
    btnTrue.className = 'btn-tf btn-tf-true';
    btnTrue.innerHTML = `<span class="tf-icon">👍</span> <span>VERDADERO</span>`;
    btnTrue.onclick = () => {
      btnTrue.disabled = true;
      btnFalse.disabled = true;
      const isCorrect = (q.answer === true);
      btnTrue.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) btnFalse.classList.add('correct');
      this.handleAnswerResult(isCorrect, q.explanation);
    };

    const btnFalse = document.createElement('button');
    btnFalse.className = 'btn-tf btn-tf-false';
    btnFalse.innerHTML = `<span class="tf-icon">👎</span> <span>FALSO</span>`;
    btnFalse.onclick = () => {
      btnTrue.disabled = true;
      btnFalse.disabled = true;
      const isCorrect = (q.answer === false);
      btnFalse.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) btnTrue.classList.add('correct');
      this.handleAnswerResult(isCorrect, q.explanation);
    };

    wrap.appendChild(btnTrue);
    wrap.appendChild(btnFalse);
    return wrap;
  },

  buildMatching(q) {
    const wrap = document.createElement('div');
    wrap.className = 'matching-game-container';

    this.userSelectedPairs = [];
    this.selectedLeftPair = null;

    const leftCol = document.createElement('div');
    leftCol.className = 'matching-col left-col';

    const rightCol = document.createElement('div');
    rightCol.className = 'matching-col right-col';

    // Desordenar columna derecha
    const shuffledRight = [...q.pairs].sort(() => Math.random() - 0.5);

    q.pairs.forEach((pair) => {
      const leftBtn = document.createElement('button');
      leftBtn.className = 'matching-item left-item';
      leftBtn.innerText = pair.left;
      leftBtn.dataset.key = pair.left;
      leftBtn.onclick = () => {
        if (leftBtn.classList.contains('matched')) return;
        leftCol.querySelectorAll('.matching-item').forEach(b => b.classList.remove('selected'));
        leftBtn.classList.add('selected');
        this.selectedLeftPair = pair;
      };
      leftCol.appendChild(leftBtn);
    });

    shuffledRight.forEach((pair) => {
      const rightBtn = document.createElement('button');
      rightBtn.className = 'matching-item right-item';
      rightBtn.innerText = pair.right;
      rightBtn.dataset.key = pair.right;
      rightBtn.onclick = () => {
        if (rightBtn.classList.contains('matched')) return;
        if (!this.selectedLeftPair) {
          audio.speak("Selecciona primero un elemento de la izquierda.");
          return;
        }

        // Comprobar si coincide
        if (this.selectedLeftPair.right === pair.right) {
          // Acierto de pareja
          const leftEl = leftCol.querySelector(`[data-key="${this.selectedLeftPair.left}"]`);
          if (leftEl) {
            leftEl.classList.remove('selected');
            leftEl.classList.add('matched');
          }
          rightBtn.classList.add('matched');
          this.userSelectedPairs.push(pair);
          this.selectedLeftPair = null;

          audio.playSuccessChime();

          if (this.userSelectedPairs.length === q.pairs.length) {
            this.handleAnswerResult(true, q.explanation);
          }
        } else {
          // Fallo
          rightBtn.classList.add('shake');
          setTimeout(() => rightBtn.classList.remove('shake'), 400);
        }
      };
      rightCol.appendChild(rightBtn);
    });

    wrap.appendChild(leftCol);
    wrap.appendChild(rightCol);
    return wrap;
  },

  buildFillBlanks(q) {
    const wrap = document.createElement('div');
    wrap.className = 'fill-blanks-container';

    const inputRow = document.createElement('div');
    inputRow.className = 'fill-input-row';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-input';
    input.placeholder = 'Escribe tu respuesta aquí...';
    input.autocomplete = 'off';
    input.autocapitalize = 'none';
    input.spellcheck = false;

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btn-fill-submit';
    btnSubmit.innerText = 'Comprobar ➜';

    const verify = () => {
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      input.disabled = true;
      btnSubmit.disabled = true;

      const isCorrect = q.aliases
        ? q.aliases.some(a => a.toLowerCase() === val)
        : (val === q.blankAnswer.toLowerCase());

      input.classList.add(isCorrect ? 'correct' : 'incorrect');
      this.handleAnswerResult(isCorrect, q.explanation);
    };

    btnSubmit.onclick = verify;
    input.onkeydown = (e) => {
      if (e.key === 'Enter') verify();
    };

    inputRow.appendChild(input);
    inputRow.appendChild(btnSubmit);
    wrap.appendChild(inputRow);

    setTimeout(() => input.focus(), 150);
    return wrap;
  },

  handleAnswerResult(isCorrect, explanation) {
    const footer = document.getElementById('exercise-footer');
    const msgEl = document.getElementById('feedback-msg');
    const nextBtn = document.getElementById('btn-next-exercise');

    footer.className = `exercise-footer ${isCorrect ? 'footer-correct' : 'footer-incorrect'}`;

    if (isCorrect) {
      const streakMult = BestKidsGamification.getStreakMultiplier();
      const points = Math.round(15 * streakMult);
      this.scoreEarned += points;

      // Sumar al estado global
      AppState.score += points;
      saveProgress();
      updateGamificationHeader();

      audio.playSuccessChime();
      triggerMiniConfetti(document.getElementById('exercise-body'));

      msgEl.innerHTML = `
        <div class="feedback-badge success">✅ ¡Excelente, Jimena! +${points} pts</div>
        <div class="feedback-sub">${explanation || "¡Respuesta correcta!"}</div>
      `;
    } else {
      msgEl.innerHTML = `
        <div class="feedback-badge fail">❌ ¡Casi lo tienes!</div>
        <div class="feedback-sub">${explanation || "¡Sigue intentándolo en la siguiente!"}</div>
      `;
    }

    nextBtn.style.display = 'block';
    nextBtn.onclick = () => {
      this.currentIndex++;
      if (this.currentIndex < this.currentUnit.questions.length) {
        this.renderQuestion();
      } else {
        this.finishUnitCelebration();
      }
    };
  },

  finishUnitCelebration() {
    const body = document.getElementById('exercise-body');
    const footer = document.getElementById('exercise-footer');
    footer.style.display = 'none';

    // Marcar unidad superada
    const unitKey = `${this.currentSubject}_${this.currentUnit.id}`;
    if (!AppState.solvedItems[this.currentSubject]) {
      AppState.solvedItems[this.currentSubject] = [];
    }
    if (!AppState.solvedItems[this.currentSubject].includes(unitKey)) {
      AppState.solvedItems[this.currentSubject].push(unitKey);
      saveProgress();
    }

    const streak = BestKidsGamification.getStreak();
    const levelInfo = BestKidsGamification.getLevelInfo(AppState.score);

    body.innerHTML = `
      <div class="celebration-unit-box">
        <div class="cel-stars">⭐⭐⭐</div>
        <h2>¡Unidad Completada con Éxito!</h2>
        <p class="cel-unit-name">${this.currentUnit.title}</p>
        
        <div class="cel-stats-row">
          <div class="stat-bubble">
            <span class="stat-num">+${this.scoreEarned}</span>
            <span class="stat-label">Puntos Ganados</span>
          </div>
          <div class="stat-bubble">
            <span class="stat-num">🔥 ${streak}d</span>
            <span class="stat-label">Racha Activa</span>
          </div>
          <div class="stat-bubble">
            <span class="stat-num">Nvl ${levelInfo.level}</span>
            <span class="stat-label">${levelInfo.title}</span>
          </div>
        </div>

        <button class="btn-celebrate-finish" onclick="ExerciseRunner.close(); renderSubjectHub('${this.currentSubject}');">
          🎉 ¡Continuar Aprendiendo!
        </button>
      </div>
    `;

    triggerCelebrationConfetti();
    updateGamificationHeader();
    if (typeof updateAllSubjectTabBadges === 'function') updateAllSubjectTabBadges();
  },

  speak(text, lang = 'es-ES') {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
};

// --- Renderizado de Hubs de Materias (Mundo de Mates, Lengua, Inglés) ---
function renderSubjectHub(subjectKey) {
  const container = document.getElementById(`view-${subjectKey}`);
  if (!container) return;

  const subjectData = CURRICULUM_DATA[subjectKey];
  if (!subjectData) return;

  const solvedUnits = AppState.solvedItems[subjectKey] || [];

  container.innerHTML = `
    <div class="subject-hero">
      <div class="subject-hero-icon">${subjectData.icon}</div>
      <h2>${subjectData.title}</h2>
      <p>${subjectData.heroDesc}</p>
    </div>

    <div class="units-grid-interactive">
      ${subjectData.units.map((unit, index) => {
        const unitKey = `${subjectKey}_${unit.id}`;
        const isSolved = solvedUnits.includes(unitKey);

        return `
          <div class="unit-card ${isSolved ? 'unit-completed' : ''}">
            <div class="unit-card-header">
              <span class="unit-icon">${unit.icon}</span>
              ${isSolved ? '<span class="unit-badge-solved">✓ Superada</span>' : '<span class="unit-badge-active">5 Retos</span>'}
            </div>
            <h3>${unit.title}</h3>
            <p>${unit.desc}</p>
            <button class="btn-play-unit" onclick="ExerciseRunner.startUnit('${subjectKey}', ${index})">
              ${isSolved ? '🔄 Practicar otra vez' : '▶️ ¡Jugar Unidad!'}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Actualizar contador del tab
  const badge = document.getElementById(`badge-count-${subjectKey}`);
  if (badge) {
    badge.innerText = `${solvedUnits.length}/${subjectData.units.length}`;
  }
}

// --- Actualización de Cabecera y Gamificación ---
function updateGamificationHeader() {
  const score = AppState.score || 0;
  const streak = BestKidsGamification.getStreak();
  const levelInfo = BestKidsGamification.getLevelInfo(score);

  // Score
  const scoreEl = document.getElementById('total-score');
  if (scoreEl) scoreEl.innerText = score;

  // Streak badge
  let streakEl = document.getElementById('streak-count');
  if (!streakEl) {
    const parent = document.querySelector('.jimena-profile');
    if (parent) {
      const badge = document.createElement('div');
      badge.className = 'streak-pill';
      badge.id = 'streak-badge';
      badge.innerHTML = `🔥 <span id="streak-count">${streak}</span>d`;
      badge.title = 'Racha de días consecutivos de estudio';
      parent.prepend(badge);
    }
  } else {
    streakEl.innerText = streak;
  }

  // Level badge
  let levelEl = document.getElementById('user-level');
  if (!levelEl) {
    const parent = document.querySelector('.header-actions');
    if (parent) {
      const levelBadge = document.createElement('div');
      levelBadge.className = 'level-pill';
      levelBadge.id = 'level-badge';
      levelBadge.innerHTML = `⭐ Nvl <span id="user-level">${levelInfo.level}</span>`;
      levelBadge.title = `Nivel: ${levelInfo.title} (${levelInfo.progress}% hacia el siguiente)`;
      parent.insertBefore(levelBadge, parent.firstChild);
    }
  } else {
    levelEl.innerText = levelInfo.level;
    const badge = document.getElementById('level-badge');
    if (badge) badge.title = `Nivel: ${levelInfo.title} (${levelInfo.progress}%)`;
  }

  // Marco de Avatar
  BestKidsGamification.applyActiveFrameUI();
}

// --- Renderizar Tienda de Avatares y Medallas en la sección "Mis Medallas" ---
function renderTrophiesAndShop() {
  const container = document.getElementById('view-medallas');
  if (!container) return;

  const score = AppState.score || 0;
  const streak = BestKidsGamification.getStreak();
  const levelInfo = BestKidsGamification.getLevelInfo(score);
  const unlocked = BestKidsGamification.getUnlockedFrames();
  const activeFrame = BestKidsGamification.getActiveFrame();

  container.innerHTML = `
    <div class="subject-hero">
      <div class="subject-hero-icon">🏆</div>
      <h2>Vitrina de Trofeos y Tienda de Jimena</h2>
      <p>Mira tu progreso, equipa marcos especiales y desbloquea recompensas con tus puntos de estudio.</p>
    </div>

    <!-- Panel de Progreso y Estadísticas -->
    <div class="gamification-stats-banner">
      <div class="stat-card">
        <span class="stat-icon">⭐</span>
        <div>
          <h4>Nivel ${levelInfo.level}</h4>
          <p>${levelInfo.title}</p>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon">🔥</span>
        <div>
          <h4>${streak} Días de Racha</h4>
          <p>Multiplicador +${Math.round((BestKidsGamification.getStreakMultiplier() - 1) * 100)}%</p>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon">🪙</span>
        <div>
          <h4>${score} Puntos</h4>
          <p>Disponibles para la tienda</p>
        </div>
      </div>
    </div>

    <!-- Tienda de Marcos de Avatar -->
    <div class="section-shop-title">
      <h3>🎨 Tienda de Marcos para el Avatar de Jimena</h3>
      <p>Equipa marcos especiales para personalizar tu perfil en la app:</p>
    </div>

    <div class="shop-grid">
      ${BestKidsGamification.frames.map(frame => {
        const isUnlocked = unlocked.includes(frame.id) || score >= frame.cost;
        const isEquipped = activeFrame === frame.id;

        return `
          <div class="shop-item-card ${isEquipped ? 'equipped' : ''}">
            <div class="avatar-preview-box">
              <div class="avatar-jimena ${frame.id}">👧</div>
            </div>
            <h4>${frame.name}</h4>
            <div class="shop-cost">${frame.cost === 0 ? 'Gratis' : `🪙 ${frame.cost} pts`}</div>
            <button class="btn-shop-action ${isEquipped ? 'equipped' : isUnlocked ? 'unlocked' : 'locked'}"
                    onclick="handleShopClick('${frame.id}', ${frame.cost})">
              ${isEquipped ? '✓ Equipado' : isUnlocked ? 'Equipar' : `Desbloquear (${frame.cost} pts)`}
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Vitrina de Medallas -->
    <div class="section-shop-title" style="margin-top: 36px;">
      <h3>🏅 Medallas Ganadas</h3>
      <p>Trofeos por completar secciones en Ciencias, Matemáticas y Lengua:</p>
    </div>

    <div class="medals-grid">
      <div class="medal-card ${(AppState.solvedItems.huesos && AppState.solvedItems.huesos.length >= 14) ? 'unlocked' : ''}">
        <div class="medal-icon">🦴</div>
        <h4>Dra. del Esqueleto</h4>
        <p>14/14 Huesos identificados</p>
      </div>

      <div class="medal-card ${(AppState.solvedItems.persona && AppState.solvedItems.persona.length >= 4) ? 'unlocked' : ''}">
        <div class="medal-icon">👧</div>
        <h4>Cuerpo Humano 3D</h4>
        <p>Partes principales de Jimena</p>
      </div>

      <div class="medal-card ${(AppState.solvedItems.musculos_del && AppState.solvedItems.musculos_del.length >= 5) ? 'unlocked' : ''}">
        <div class="medal-icon">💪</div>
        <h4>Fuerza Muscular</h4>
        <p>Músculos delanteros y traseros</p>
      </div>

      <div class="medal-card ${(AppState.solvedItems.matematicas && AppState.solvedItems.matematicas.length >= 3) ? 'unlocked' : ''}">
        <div class="medal-icon">📐</div>
        <h4>Ninja de los Números</h4>
        <p>Supera las 3 unidades de Mates</p>
      </div>

      <div class="medal-card ${(AppState.solvedItems.lengua && AppState.solvedItems.lengua.length >= 3) ? 'unlocked' : ''}">
        <div class="medal-icon">📖</div>
        <h4>Reina de la Ortografía</h4>
        <p>Supera las 3 unidades de Lengua</p>
      </div>

      <div class="medal-card ${(AppState.solvedItems.ingles && AppState.solvedItems.ingles.length >= 2) ? 'unlocked' : ''}">
        <div class="medal-icon">🇬🇧</div>
        <h4>Star Speaker</h4>
        <p>Supera las unidades de Inglés</p>
      </div>
    </div>
  `;
}

function handleShopClick(frameId, cost) {
  const score = AppState.score || 0;
  const unlocked = BestKidsGamification.getUnlockedFrames();

  if (unlocked.includes(frameId) || score >= cost) {
    BestKidsGamification.unlockFrame(frameId);
    audio.playSuccessChime();
    renderTrophiesAndShop();
    updateGamificationHeader();
  } else {
    audio.speak(`Necesitas ${cost} puntos para este marco. ¡Sigue jugando para conseguirlos!`);
  }
}

// Actualizar contadores de pestañas de materias
function updateAllSubjectTabBadges() {
  ['matematicas', 'lengua', 'ingles'].forEach(sub => {
    const sData = CURRICULUM_DATA[sub];
    const sBadge = document.getElementById(`badge-count-${sub}`);
    if (sData && sBadge) {
      const solved = (AppState.solvedItems && AppState.solvedItems[sub]) || [];
      sBadge.innerText = `${solved.length}/${sData.units.length}`;
    }
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  BestKidsGamification.checkStreak();
  updateGamificationHeader();
  updateAllSubjectTabBadges();

  // Escuchar cambios de tabs de materias
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-subject');
      if (['matematicas', 'lengua', 'ingles'].includes(subject)) {
        renderSubjectHub(subject);
      } else if (subject === 'medallas') {
        renderTrophiesAndShop();
      }
    });
  });
});
