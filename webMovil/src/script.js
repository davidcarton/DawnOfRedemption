//   DETECCIÓN: Cambios entre PC ↔ Móvil
window.addEventListener("resize", () => {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  if (!esMovil) {
    window.location.href = "/index.html"; // vuelve al loading
  }
});
