import images from "@/assets/images/img.js";
import icons from "@/assets/icons/technologies.js";

const layout = {
  title: "Layouts",
  date: "19/04/2021",
  status: "Terminado",
  images: [
    {
      id: 1,
      img: images.layout.img,
    },
    {
      id: 2,
      img: images.layout.img2,
    },
  ],
  description: [
    {
      text:
        "Esta página de maquetaciones es una serie de proyectos estáticos en donde sus diseños fueron tomados de “frontendmentor”, en la cual tengo el propósito de afianzar mis conocimientos en HTML, JS, SCSS y frameworks CSS.",
    },
  ],
  technologies: [
    icons.technologies.html,
    icons.technologies.js,
    icons.technologies.sass,
    icons.technologies.bootstrap,
    icons.technologies.tailwind,
    icons.technologies.vercel,
  ],
  repo: "https://github.com/g1alexander/layouts",
  web: "https://layouts-nu.vercel.app/",
};

export default layout;
