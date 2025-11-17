// Total de imágenes
const TOTAL_IMAGENES = 29;

// Elementos del DOM
const lista = document.getElementById("listaImagenes");
const imagenActual = document.getElementById("imagenActual");

// Crear botones automáticamente según imágenes
for (let i = 1; i <= TOTAL_IMAGENES; i++) {
  const boton = document.createElement("button");

  boton.textContent = `Art Concept ${i}`;

  boton.addEventListener("click", () => {
    // Ruta de las imágenes
    imagenActual.src = `../css/img/galeria/img(${i}).jpg`;

    // boton activo de imagen seleccionada
    document
      .querySelectorAll(".barra-lateral button")
      .forEach((btn) => btn.classList.remove("activo"));

    boton.classList.add("activo");
  });

  lista.appendChild(boton);
}

// Mostrar primera imagen al cargar (opcional)
imagenActual.src = `../css/img/galeria/img(1).jpg`;
