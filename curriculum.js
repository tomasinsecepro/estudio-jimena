/**
 * ESTUDIO JIMENA 3D - MOTOR PEDAGÓGICO Y GAMIFICACIÓN (BESTKIDS ADAPTATION)
 * Asignaturas: Matemáticas, Lengua, Inglés y Sistema de Gamificación
 * Nivel adaptado: 3º de Primaria (8 años)
 */

// --- Base de Datos Curricular de 3º de Primaria (8 años) ---
const CURRICULUM_DATA = {
  matematicas: {
    title: "Mundo de los Números",
    icon: "📐",
    heroDesc: "¡Hola Jimena! Aprende jugando las tablas de multiplicar, retos de cálculo, el reloj y las figuras geométricas.",
    units: [
      {
        id: "mat_1",
        title: "Tablas de Multiplicar y Cálculo Rápido",
        icon: "⚡",
        desc: "Tablas del 2 al 9, sumas con llevadas y dobles.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuánto es 7 × 8?",
            options: ["56", "54", "48", "63"],
            answer: "56",
            explanation: "7 × 8 = 56. ¡Te sabes la tabla genial, Jimena!"
          },
          {
            type: "true_false",
            question: "El doble de 15 es 30.",
            answer: true,
            explanation: "¡Correcto! 15 + 15 = 30."
          },
          {
            type: "matching",
            question: "Conecta cada multiplicación con su resultado correcto:",
            pairs: [
              { left: "6 × 4", right: "24" },
              { left: "9 × 3", right: "27" },
              { left: "8 × 5", right: "40" },
              { left: "7 × 7", right: "49" }
            ],
            explanation: "¡Tablas de multiplicar dominadas!"
          },
          {
            type: "fill_blanks",
            question: "Si en una caja hay 6 lápices y tengo 4 cajas iguales, en total tengo ___ lápices.",
            blankAnswer: "24",
            aliases: ["24", "veinticuatro"],
            explanation: "4 cajas × 6 lápices = 24 lápices en total."
          },
          {
            type: "multiple_choice",
            question: "¿Cuánto es 120 + 80?",
            options: ["200", "190", "210", "220"],
            answer: "200",
            explanation: "120 + 80 = 200. ¡Cálculo mental perfecto!"
          }
        ]
      },
      {
        id: "mat_2",
        title: "Centenas, Decenas y el Reloj",
        icon: "⏰",
        desc: "Números hasta el 1.000, descomposición y lectura de horas.",
        questions: [
          {
            type: "multiple_choice",
            question: "En el número 438, ¿cuántas centenas hay?",
            options: ["4 centenas", "3 centenas", "8 centenas", "40 centenas"],
            answer: "4 centenas",
            explanation: "El 4 ocupa la posición de las centenas (4 centenas = 400 unidades)."
          },
          {
            type: "true_false",
            question: "Una hora completa tiene 60 minutos.",
            answer: true,
            explanation: "¡Exacto! Y media hora tiene 30 minutos."
          },
          {
            type: "matching",
            question: "Une cada cantidad con sus unidades:",
            pairs: [
              { left: "3 centenas", right: "300 unidades" },
              { left: "5 decenas", right: "50 unidades" },
              { left: "8 decenas", right: "80 unidades" },
              { left: "1 millar", right: "1.000 unidades" }
            ],
            explanation: "¡Descomposición de números impecable!"
          },
          {
            type: "fill_blanks",
            question: "Si la aguja corta del reloj señala el 4 y la larga señala el 6, son las cuatro y ___.",
            blankAnswer: "media",
            aliases: ["media", "30", "treinta"],
            explanation: "Cuando la aguja minutera está en el 6 marca 'y media' (30 minutos)."
          },
          {
            type: "multiple_choice",
            question: "¿Cuál de estos números es MAYOR que 589?",
            options: ["602", "579", "499", "588"],
            answer: "602",
            explanation: "602 tiene 6 centenas, por lo que es mayor que 589 (que tiene 5 centenas)."
          }
        ]
      },
      {
        id: "mat_3",
        title: "Figuras Geométricas y Medidas",
        icon: "📐",
        desc: "Triángulos, cuadrados, lados, vértices y medidas con la regla.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuántos lados tiene un triángulo?",
            options: ["3 lados", "4 lados", "5 lados", "2 lados"],
            answer: "3 lados",
            explanation: "El triángulo siempre tiene 3 lados y 3 vértices."
          },
          {
            type: "true_false",
            question: "Un cuadrado tiene sus 4 lados exactamente de la misma longitud.",
            answer: true,
            explanation: "¡Muy bien! Los 4 lados del cuadrado son iguales."
          },
          {
            type: "matching",
            question: "Une cada figura con su característica:",
            pairs: [
              { left: "Triángulo", right: "3 lados y 3 vértices" },
              { left: "Cuadrado", right: "4 lados iguales" },
              { left: "Rectángulo", right: "Lados iguales 2 a 2" },
              { left: "Círculo", right: "Línea curva sin lados rectos" }
            ],
            explanation: "¡Clasificación geométrica perfecta!"
          },
          {
            type: "fill_blanks",
            question: "1 metro entero equivale a ___ centímetros.",
            blankAnswer: "100",
            aliases: ["100", "cien"],
            explanation: "1 metro (m) = 100 centímetros (cm)."
          },
          {
            type: "multiple_choice",
            question: "¿Qué instrumento usamos en el estuche del cole para medir centímetros?",
            options: ["La regla", "La báscula", "El termómetro", "El reloj"],
            answer: "La regla",
            explanation: "La regla nos permite medir objetos pequeños en centímetros y milímetros."
          }
        ]
      }
    ]
  },

  lengua: {
    title: "Reino de las Letras",
    icon: "📖",
    heroDesc: "¡Hola Jimena! Aprende a separar sílabas, los nombres comunes y propios, y las reglas para escribir sin faltas.",
    units: [
      {
        id: "len_1",
        title: "Las Sílabas y el Abecedario",
        icon: "🔤",
        desc: "Separar sílabas, orden alfabético y signos de puntuación.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuántas sílabas tiene la palabra 'mariposa' (ma-ri-po-sa)?",
            options: ["4 sílabas", "3 sílabas", "2 sílabas", "5 sílabas"],
            answer: "4 sílabas",
            explanation: "Ma-ri-po-sa tiene 4 golpes de voz o sílabas (es polisílaba)."
          },
          {
            type: "true_false",
            question: "Los nombres propios de personas como 'Jimena' se escriben SIEMPRE con mayúscula inicial.",
            answer: true,
            explanation: "¡Verdadero! Todos los nombres propios de personas y lugares empiezan con mayúscula."
          },
          {
            type: "matching",
            question: "Une cada palabra con su número de sílabas:",
            pairs: [
              { left: "Sol", right: "1 sílaba (Monosílaba)" },
              { left: "Pe-rro", right: "2 sílabas (Bisílaba)" },
              { left: "Es-tre-lla", right: "3 sílabas (Trisílaba)" },
              { left: "Bi-ci-cle-ta", right: "4 sílabas (Polisílaba)" }
            ],
            explanation: "¡Separación silábica impecable!"
          },
          {
            type: "fill_blanks",
            question: "Para empezar una pregunta en español ponemos el signo ___ y para terminar ponemos ?.",
            blankAnswer: "¿",
            aliases: ["¿", "interrogacion", "signo de interrogacion"],
            explanation: "En español las preguntas se abren con ¿ y se cierran con ?."
          },
          {
            type: "multiple_choice",
            question: "¿Qué palabra va PRIMERO según el orden del abecedario?",
            options: ["Árbol", "Barco", "Casa", "Delfín"],
            answer: "Árbol",
            explanation: "La A es la primera letra del abecedario, así que Árbol va primero."
          }
        ]
      },
      {
        id: "len_2",
        title: "Sustantivos y Adjetivos",
        icon: "🏷️",
        desc: "Nombres propios y comunes, singular/plural y adjetivos.",
        questions: [
          {
            type: "multiple_choice",
            question: "¿Cuál de estas palabras es un nombre PROPIO?",
            options: ["Jimena", "niña", "colegio", "pelota"],
            answer: "Jimena",
            explanation: "'Jimena' es un nombre propio y se escribe con mayúscula."
          },
          {
            type: "true_false",
            question: "La palabra 'amable' es un adjetivo porque nos dice cómo es una persona.",
            answer: true,
            explanation: "¡Exacto! Los adjetivos explican cómo son las cosas o personas."
          },
          {
            type: "matching",
            question: "Transforma cada sustantivo de singular a plural:",
            pairs: [
              { left: "El lápiz", right: "Los lápices" },
              { left: "La flor", right: "Las flores" },
              { left: "El árbol", right: "Los árboles" },
              { left: "La canción", right: "Las canciones" }
            ],
            explanation: "¡Plurales perfectos!"
          },
          {
            type: "fill_blanks",
            question: "El femenino del sustantivo 'caballo' es la ___.",
            blankAnswer: "yegua",
            aliases: ["yegua", "la yegua"],
            explanation: "El macho es el caballo y la hembra es la yegua."
          },
          {
            type: "multiple_choice",
            question: "¿Cuál es el antónimo (lo contrario) de la palabra 'rápido'?",
            options: ["Lento", "Veloz", "Ágil", "Fuerte"],
            answer: "Lento",
            explanation: "Lo contrario de rápido es lento."
          }
        ]
      },
      {
        id: "len_3",
        title: "Ortografía Divertida (C/QU, R/RR y M)",
        icon: "💡",
        desc: "Aprende a escribir sin faltas: M antes de P y B, C y QU, y la R fuerte.",
        questions: [
          {
            type: "multiple_choice",
            question: "Delante de las letras P y B, ¿qué letra se escribe SIEMPRE?",
            options: ["La letra M", "La letra N", "La letra S", "La letra L"],
            answer: "La letra M",
            explanation: "¡Regla de oro! Siempre se escribe M antes de P y B (ej. campana, bombero, tambor)."
          },
          {
            type: "true_false",
            question: "La palabra 'queso' se escribe con QU y no con C.",
            answer: true,
            explanation: "¡Correcto! Delante de la E y de la I siempre usamos QU (que, qui)."
          },
          {
            type: "matching",
            question: "Elige si se escribe con C o con QU:",
            pairs: [
              { left: "___asa", right: "C (Casa)" },
              { left: "___eso", right: "QU (Queso)" },
              { left: "___oche", right: "C (Coche)" },
              { left: "pa___ete", right: "QU (Paquete)" }
            ],
            explanation: "¡Dominas las reglas de C y QU!"
          },
          {
            type: "fill_blanks",
            question: "Completa la palabra ta___or (instrumento musical): se escribe con m antes de b.",
            blankAnswer: "mb",
            aliases: ["mb", "tambor", "m"],
            explanation: "Tam-bor se escribe con M antes de B."
          },
          {
            type: "multiple_choice",
            question: "¿Cuál de estas palabras está bien escrita con RR fuerte?",
            options: ["Perro", "Pero", "Pera", "Para"],
            answer: "Perro",
            explanation: "El animal que ladra tiene sonido fuerte entre dos vocales y se escribe con doble r (perro)."
          }
        ]
      }
    ]
  },

  ingles: {
    title: "English Practice 3rd Grade",
    icon: "🇬🇧",
    heroDesc: "Body parts, animals, colors and easy words with native audio pronunciation for Jimena.",
    units: [
      {
        id: "ing_1",
        title: "My Body & Face",
        icon: "👧",
        desc: "Head, arms, legs, eyes, ears, mouth and teeth in English.",
        questions: [
          {
            type: "multiple_choice",
            question: "How do you say 'Cabeza' in English?",
            options: ["Head", "Hand", "Foot", "Arm"],
            answer: "Head",
            audioText: "Head",
            explanation: "Head means Cabeza in English! Touch your head!"
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
              { left: "Hands", right: "Manos" },
              { left: "Legs", right: "Piernas" },
              { left: "Ears", right: "Orejas" },
              { left: "Mouth", right: "Boca" }
            ],
            explanation: "Great job! Body parts mastered in English!"
          },
          {
            type: "fill_blanks",
            question: "Complete the sentence: 'I have two ___ on my face to see.'",
            blankAnswer: "eyes",
            aliases: ["eyes", "eye"],
            audioText: "I have two eyes on my face to see.",
            explanation: "Eyes = ojos."
          },
          {
            type: "multiple_choice",
            question: "How do you say 'Dientes' in English?",
            options: ["Teeth", "Toes", "Fingers", "Nose"],
            answer: "Teeth",
            audioText: "Teeth",
            explanation: "Teeth = dientes. Remember to brush your teeth!"
          }
        ]
      },
      {
        id: "ing_2",
        title: "Animals & Colors",
        icon: "🦁",
        desc: "Pets, wild animals and the colors of the rainbow.",
        questions: [
          {
            type: "multiple_choice",
            question: "What animal says 'Woof woof'?",
            options: ["Dog", "Cat", "Cow", "Duck"],
            answer: "Dog",
            audioText: "Dog",
            explanation: "A dog says woof woof! Dog = perro."
          },
          {
            type: "true_false",
            question: "An elephant is a very big animal and its color is grey.",
            answer: true,
            audioText: "An elephant is a very big animal.",
            explanation: "True! Elephants are big and grey."
          },
          {
            type: "matching",
            question: "Match each animal with its Spanish name:",
            pairs: [
              { left: "Cat", right: "Gato" },
              { left: "Bird", right: "Pájaro" },
              { left: "Fish", right: "Pez" },
              { left: "Horse", right: "Caballo" }
            ],
            explanation: "Super animal vocabulary!"
          },
          {
            type: "fill_blanks",
            question: "The color of the sky and the ocean on a sunny day is ___.",
            blankAnswer: "blue",
            aliases: ["blue", "azul"],
            audioText: "The color of the sky is blue.",
            explanation: "Blue = azul."
          },
          {
            type: "multiple_choice",
            question: "What color do you get if you mix Red and Yellow?",
            options: ["Orange", "Green", "Purple", "Pink"],
            answer: "Orange",
            audioText: "Orange",
            explanation: "Red + Yellow = Orange (Naranja)!"
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
    { level: 2, title: "Exploradora de 3º", minXP: 500 },
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
