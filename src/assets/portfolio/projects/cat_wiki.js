import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

const catWiki = {
  title: "Cat Wiki",
  date: "24/07/2021",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.cat.img1,
    },
    {
      id: 2,
      img: images.cat.img2,
    },
  ],
  description: [
    {
      text:
        "En este proyecto y curso de Javascript aprendí a tener un amplio manejo del lenguaje y en donde adicionalmente me permitió aplicar todo este conocimiento a lo que es Typescript.",
    },
    {
      text:
        "En esta aplicación apliqué los conceptos avanzados de SPA (single-page application) y manejo de estado reactivo, adicionalmente aprendí cómo configurar e implementar una herramienta de compilación como lo es Webpack.",
    },
  ],
  technologies: [
    icons.technologies.ts,
    icons.technologies.webpack,
    icons.technologies.css,
    icons.technologies.vercel,
  ],
  repo: "https://github.com/pawaydigital/CatWiki",
  web: "https://cat-wiki-webpack.vercel.app/",
};

export default catWiki;
