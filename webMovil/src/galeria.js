const TOTAL_IMAGENES = 18;

let indice = 1;

const imagenActual = document.getElementById("imagenActual");

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnIndex = document.getElementById("btnIndex");

// Función para actualizar imagen
function mostrarImagen() {
  imagenActual.src = `./img/img(${indice}).jpg`;
}

// Botón Anterior
btnAnterior.addEventListener("click", () => {
  indice--;
  if (indice < 1) indice = TOTAL_IMAGENES;
  mostrarImagen();
});

// Botón Siguiente
btnSiguiente.addEventListener("click", () => {
  indice++;
  if (indice > TOTAL_IMAGENES) indice = 1;
  mostrarImagen();
});

// Botón Index → vuelve a la primera imagen
btnIndex.addEventListener("click", () => {
  window.location.href = "../index.html";
});

// Mostrar imagen inicial
mostrarImagen();
