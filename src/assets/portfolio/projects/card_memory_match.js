import images from "@/assets/images/projects/img.js";

const memory = {
  title: "Card Memory Match",
  date: "06/12/2020",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.c_m_m.img,
    },
    {
      id: 2,
      img: images.c_m_m.img2,
    },
  ],
  description: `Es un clásico juego de memoria que te ayudará a entrenar tu cerebro, a memorizar mejor y ejercitar la memoria. Conecta lo lúdico con un entrenador de cerebro, la concentración y memoria visual. Es un juego casual y puzzle fácil de entender y jugar para todas las edades. Encuentra los pares iguales de cartas que están boca abajo para pasar de nivel y aumentar la dificultad del desafío. Este juego fue inspirado de "Juego de memoria: Memotest - Memorama. Empajera!" que se encuentra en la play store, pero, a diferencia del original que estuvo realizado en Unity, este fue hecho en tecnologias web.`,
  technologies: [
    { id: 1, name: "Vue JS", url: "https://cli.vuejs.org/", color: "vue" },
    {
      id: 2,
      name: "BootstrapVue",
      url: "https://bootstrap-vue.org/",
      color: "bootstrap",
    },
    {
      id: 3,
      name: "Capacitor",
      url: "https://capacitorjs.com/",
      color: "capacitor",
    },
  ],
  repo: "https://github.com/PawayDigital/card-memory-match",
  web:
    "https://layouts-nu.vercel.app/tailwind/card_memory_match/index.html",
};

export default memory;
