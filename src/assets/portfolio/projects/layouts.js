import images from "@/assets/images/projects/img.js";

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
  description: `Esta página de maquetaciones es una serie de proyectos estáticos en donde sus diseños fueron tomados de “frontendmentor”, en la cual tengo el propósito de afianzar mis conocimientos en HTML, JS, SCSS y frameworks CSS.`,
  technologies: [
    {
      id: 1,
      name: "HTML",
      url: "https://developer.mozilla.org/es/docs/Web/HTML",
      color: "html",
    },
    {
      id: 2,
      name: "JS",
      url: "https://developer.mozilla.org/es/docs/Web/javascript",
      color: "js",
    },
    {
      id: 3,
      name: "SCSS",
      url: "https://sass-lang.com/guide",
      color: "scss",
    },
    {
      id: 4,
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      color: "bootstrap",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      color: "tailwind",
    },
    {
      id: 6,
      name: "Vercel",
      url: "https://vercel.com/",
      color: "vercel",
    },
  ],
  repo: "https://github.com/g1alexander/layouts",
  web: "https://layouts-nu.vercel.app/",
};

export default layout;
