document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaCanciones");

  document.addEventListener("click", (e) => {
    const cuadro = e.target.closest(".cuadro");
    if (!cuadro) return;

    const id = cuadro.dataset.id;

    // Abrir visor.html pasando el ID en la URL
    window.location.href = `visor.html?id=${id}`;
  });
});
