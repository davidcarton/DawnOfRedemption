/*---------------------------------
   CARGA DE CRÓNICAS
---------------------------------*/

const botones = document.querySelectorAll(".lateral button");
const contenido = document.getElementById("contenidoCronicas");

// --- Cargar INTRODUCCIÓN al inicio ---
cargarHistoria("intro", "Introducción");

// --- Eventos de los botones ---
botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("activo"));
    btn.classList.add("activo");

    const archivo = btn.dataset.file;
    const titulo = btn.dataset.titulo;

    cargarHistoria(archivo, titulo);
  });
});

// --- Función de carga de historias ---
function cargarHistoria(ruta, titulo) {
  contenido.innerHTML = `<h1>${titulo}</h1><p>Cargando...</p>`;

  /*----------------------------------
     INTRODUCCIÓN — NO USA TXT
  ----------------------------------*/
  if (ruta === "intro") {
    contenido.innerHTML = `
      <h1>Cuentos del Alba</h1>
      <p>
      En un mundo donde la oscuridad avanza en silencio, tres luces permanecen en pie.<br><br>
      Las leyendas hablan de almas que, en tiempos antiguos, se alzaron no por gloria, sino por aquello que aún merecía ser protegido.  
      En las grietas de la noche, donde nacen las batallas invisibles, surge un eco que nunca muere: el Legado del Viento.<br><br>
      Los Cuentos del Alba reúne historias de valor, fragilidad, sacrificio y esperanza.  
      Aquí, la música no solo se escucha: se vive, se siente, y guía el corazón hacia la luz que resiste incluso en la sombra más profunda.<br><br>
      Bienvenido al comienzo de la historia.<br>
      Bienvenido al Alba.
      </p>
    `;
    return;
  }

  /*-------------------------------
     HISTORIAS ARCHIVOS .TXT
  -------------------------------*/
  fetch(ruta)
    .then((res) => res.text())
    .then((texto) => {
      contenido.innerHTML = `
        <h1>${titulo}</h1>
        <p>${texto.replace(/\n/g, "<br>")}</p>
      `;
    })
    .catch(() => {
      contenido.innerHTML = `
        <h1>${titulo}</h1>
        <p>No se pudo cargar el archivo.</p>
      `;
    });
}
