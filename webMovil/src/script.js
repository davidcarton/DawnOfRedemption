// Resize Pc -- Movil -- Pc -------------------------------------------- //
function redetectar() {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  if (esMovil && window.location.pathname.includes("webPc")) {
    // Si estamos en versión PC y ahora pasa a móvil → volver al loading
    window.location.href = "../index.html";
  }

  if (!esMovil && window.location.pathname.includes("webMovil")) {
    // Si estamos en versión móvil y ahora pasa a PC → volver al loading
    window.location.href = "../index.html";
  }
}

// Detecta cambio de tamaño en vivo
window.addEventListener("resize", redetectar);
