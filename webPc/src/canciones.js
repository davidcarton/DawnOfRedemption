// LISTA DE CANCIONES ( título + URL )
const canciones = [
  {
    titulo: "Legado del Viento",
    url: "https://www.youtube.com/embed/gWk_D4ao4Xw",
  },
  {
    titulo: "Guardianes del Alba",
    url: "https://www.youtube.com/embed/pC3vgwIuqPE",
  },
  {
    titulo: "Luz Indomita",
    url: "https://www.youtube.com/embed/oWS3RZfPY70",
  },
  {
    titulo: "Escudo del Alba",
    url: "https://www.youtube.com/embed/ixcR26z1tEw",
  },
  {
    titulo: "Cuando la Luz toca el Acero",
    url: "https://www.youtube.com/embed/mZIjwrCcxBM",
  },
  {
    titulo: "Llama Eterna",
    url: "https://www.youtube.com/embed/U4M5CeCjC1w",
  },
  {
    titulo: "Donde nace el Alba",
    url: "https://www.youtube.com/embed/FaR6TMRleDM",
  },
  {
    titulo: "El Daño de Arkenor",
    url: "https://www.youtube.com/embed/cqBlfYjtYgM",
  },
  {
    titulo: "Guia de Fuego",
    url: "https://www.youtube.com/embed/v6sHhMpSrSo",
  },
  {
    titulo: "Fuente de Luz",
    url: "https://www.youtube.com/embed/Fbr5MgExTHI",
  },
  {
    titulo: "Primera Armonia",
    url: "https://www.youtube.com/embed/siglthQAELM",
  },
];

// Crear boton con url
const lista = document.getElementById("listaCanciones");
const videoActual = document.getElementById("videoActual");

canciones.forEach((cancion) => {
  const boton = document.createElement("button");
  boton.textContent = cancion.titulo;

  boton.addEventListener("click", () => {
    // autoplay evita errores de reproducción en iframe dentro de iframe
    videoActual.src = `${cancion.url}?autoplay=1`;

    // ---- Resaltar canción activa ----
    document
      .querySelectorAll(".barra-lateral button")
      .forEach((btn) => btn.classList.remove("activo"));

    boton.classList.add("activo");
  });

  lista.appendChild(boton);
});
