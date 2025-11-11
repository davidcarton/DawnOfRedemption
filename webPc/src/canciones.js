// LISTA DE CANCIONES ( título + URL )
const canciones = [
  {
    titulo: "Sombras de Cristal",
    url: "https://www.youtube.com/embed/w36fBVHoDqo",
  },
  { titulo: "Amor sin voz", url: "https://www.youtube.com/embed/Eu1ulIvha9s" },
  {
    titulo: "Ecos del Silencio",
    url: "https://www.youtube.com/embed/pVIhuDvryH8",
  },
  {
    titulo: "Voces del Alma",
    url: "https://www.youtube.com/embed/M8tE3YaJKDw",
  },
  {
    titulo: "Noche del Alma",
    url: "https://www.youtube.com/embed/d-stNaPpUhw",
  },
  {
    titulo: "Destierro del Alma",
    url: "https://www.youtube.com/embed/xPHmEYYhvU4",
  },
  { titulo: "Signo Celeste", url: "https://www.youtube.com/embed/W7aHcubkh5M" },
  {
    titulo: "Del Polvo al Amanecer",
    url: "https://www.youtube.com/embed/fSGAe01s_k0",
  },
  {
    titulo: "El Ultimo Guardián",
    url: "https://www.youtube.com/embed/ih8GoJuvaPQ",
  },
  { titulo: "Ala Dorada", url: "https://www.youtube.com/embed/K9S8k7WJzEc" },
  {
    titulo: "Luz entre las Cenizas",
    url: "https://www.youtube.com/embed/OgpoSm0iJB8",
  },
  {
    titulo: "El último Oraculo",
    url: "https://www.youtube.com/embed/hYxjl9VN9rI",
  },
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
  { titulo: "Reino Forjado", url: "https://www.youtube.com/embed/xLFjzhekxHk" },
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

// Cargar la primera canción automáticamente
videoActual.src = `${cancion.url}?autoplay=1&rel=0&modestbranding=1`;
