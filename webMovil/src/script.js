//   DETECCIÓN: Cambios entre PC ↔ Móvil
if (window.location.pathname.endsWith("index.html")) {
  window.addEventListener("resize", () => {
    const esMovil = window.matchMedia("(max-width: 768px)").matches;

    if (!esMovil) {
      window.location.href = "../index.html"; // volver al loading
    }
  });
}
