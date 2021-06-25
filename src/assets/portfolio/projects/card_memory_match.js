import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

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
  description: [
    {
      text:
        "Es un juego casual y puzzle fácil de entender y jugar para todas las edades. Encuentra los pares iguales de cartas que están boca abajo para aumentar la dificultad del desafío.",
    },
    {
      text: `Este juego fue inspirado de "Juego de memoria: Memotest - Memorama. Empajera!" que se encuentra en la play store, pero, a diferencia del original que estuvo realizado en Unity, este fue hecho en tecnologias web.`,
    },
  ],
  technologies: [
    icons.technologies.vue,
    icons.technologies.bootstrapVue,
    icons.technologies.capacitor,
  ],
  repo: "https://github.com/PawayDigital/card-memory-match",
  web: "https://layouts-nu.vercel.app/tailwind/card_memory_match/index.html",
};

export default memory;
