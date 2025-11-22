// ======================================================================
//   CRÓNICAS – cargar historias .txt y volver a la lista
// ======================================================================
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaHistorias");
  const contenido = document.getElementById("contenidoHistoria");
  const btnVolver = document.getElementById("btnVolverLista");

  if (!lista) return; // si no estamos en cronicas.html

  const botones = lista.querySelectorAll(".btn-cronica");

  botones.forEach((btn) => {
    btn.addEventListener("click", async () => {
      botones.forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");

      lista.style.display = "none";
      contenido.style.display = "block";
      btnVolver.style.display = "block";

      const archivo = btn.dataset.historia;

      try {
        const resp = await fetch(archivo);
        const texto = await resp.text();
        contenido.innerHTML = `<pre>${texto}</pre>`;
      } catch {
        contenido.innerHTML = "<p>No se pudo cargar la historia.</p>";
      }
    });
  });

  btnVolver.addEventListener("click", () => {
    contenido.style.display = "none";
    lista.style.display = "flex";
    btnVolver.style.display = "none";
  });
});
