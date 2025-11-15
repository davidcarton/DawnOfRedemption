// Resize Pc -- Movil ----------------------------------------------------- //
window.addEventListener("resize", () => {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  if (esMovil) {
    window.location.href = "../index.html"; // volver al loading
  }
});

// --- IFRAME --------------------------------------------------- //
const enlaces = document.querySelectorAll("nav a");
const iframe = document.getElementById("contenido");

// Cargar automáticamente cronicas.html al iniciar
iframe.src = "./html/cronicas.html";

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault(); // evita salir a otra página
    const url = enlace.dataset.url; // lee el data-url del enlace
    iframe.src = url; // carga en el iframe
  });
});

// --- ANIMACION PARTICULAS LUZ ---------------------------------- //
const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// particulas en el haz de luz
const areaLuz = {
  xMin: 0.3, // 30% desde la izquierda
  xMax: 0.6, // 60% hacia la derecha
  yMin: 0.0, // inicio particulas
  yMax: 0.6, // alcance desde arriba
};

const numParticulas = 150;
let particulas = [];

function crearParticula() {
  const x =
    (Math.random() * (areaLuz.xMax - areaLuz.xMin) + areaLuz.xMin) *
    canvas.width;
  const y =
    (Math.random() * (areaLuz.yMax - areaLuz.yMin) + areaLuz.yMin) *
    canvas.height;

  return {
    x,
    y,
    size: Math.random() * 0.8 + 0.2, // pequeñas
    speed: Math.random() * 0.1 + 0.05, // velocidad
    alpha: Math.random() * 0.6 + 0.2, // brillo
    flicker: Math.random() * 0.04 + 0.01,
  };
}

// Inicializamos partículas
for (let i = 0; i < numParticulas; i++) {
  particulas.push(crearParticula());
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particulas.forEach((p, i) => {
    // Parpadeo
    p.alpha += (Math.random() - 0.5) * p.flicker;
    p.alpha = Math.max(0.3, Math.min(1, p.alpha));

    ctx.beginPath();
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
    grad.addColorStop(0, `rgba(255,255,220,${p.alpha})`);
    grad.addColorStop(1, `rgba(255,255,220,0)`);

    ctx.fillStyle = grad;
    ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
    ctx.fill();

    // Movimiento de arriba -> hacia abajo
    p.y += p.speed;

    // Regeneración
    if (p.y > areaLuz.yMax * canvas.height) {
      particulas[i] = crearParticula();
      particulas[i].y = areaLuz.yMin * canvas.height; // reaparece arriba
    }
  });

  requestAnimationFrame(animar);
}

animar();
