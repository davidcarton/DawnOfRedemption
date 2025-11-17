// LISTA DE CANCIONES ( título + URL )
const canciones = [
  {
    titulo: "Juramento del Alba",
    url: "https://www.youtube.com/embed/Um764ulZuCg",
  },
  {
    titulo: "Caballero del Silencio",
    url: "https://www.youtube.com/embed/gpg_qqMHFaA",
  },
  {
    titulo: "Eterno Amnecer",
    url: "https://www.youtube.com/embed/GYeN7NWs_3A",
  },
  {
    titulo: "La Voz en la Tempestad",
    url: "https://www.youtube.com/embed/EQZbe6tloMw",
  },
  {
    titulo: "Eco de la luz",
    url: "https://www.youtube.com/embed/cBYHBq5Bv6w",
  },
  {
    titulo: "El ultimo Destello",
    url: "https://www.youtube.com/embed/dPt8XfZG0hY",
  },
  {
    titulo: "Guardian del Fuego",
    url: "https://www.youtube.com/embed/XbByIAspsFs",
  },
  {
    titulo: "Incierto Amanecer",
    url: "https://www.youtube.com/embed/KPdlwgCdUkc",
  },
  {
    titulo: "Fuego Imparable",
    url: "https://www.youtube.com/embed/TvNwGxQzgAI",
  },
  {
    titulo: "Eco del Alma",
    url: "https://www.youtube.com/embed/TRcX7iL6T9w",
  },
  {
    titulo: "Legado del Viento",
    url: "https://www.youtube.com/embed/gWk_D4ao4Xw",
  },
  {
    titulo: "Guardianes del Alba",
    url: "https://www.youtube.com/embed/",
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
