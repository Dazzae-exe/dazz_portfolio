import React from "react";
import { badgeVariants } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/dazzae-exe",
    icon: <IconBrandGithub width={20} height={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/christianmarindaza",
    icon: <IconBrandLinkedin width={20} height={20} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/itsdazzae",
    icon: <IconBrandTwitter width={20} height={20} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/christiandazap/",
    icon: <IconBrandInstagram width={20} height={20} />,
  },
];

export default function Hero() {
  return (
    <div className="relative h-fit bg-white p-8 max-w-6xl mx-auto">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-8 mb-12">
        <div>
          <div className="w-48 h-48 bg-lime-200 rounded-full mb-4"></div>
          <h1>Christian Marín.</h1>
          <h3 className="mb-2">Software Developer / Front-end Developer</h3>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className={`${badgeVariants({
                variant: "outline",
              })} rounded-full mr-2 space-x-4`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
        <div className="relative top-0 h-full">
          <div className="space-y-2 sticky top-0 left-0">
            <p className="mb-4">
              Desarrollador con mas de un año de experiencia laboral
              construyendo componentes, resolviendo bugs, solicitando llamadas
              al API y cumpliendo las tareas necesarias para la empresa. <br />
              <br />
              Actualmente, estoy enfocado en el desarrollo de aplicaciones web
              utilizando React, Next.js y Tailwind CSS.
              <br />
              <br />
              Ademas de programar, me gusta el futbol, incluso es mi deporte favorito. Disfruto los días productivos junto a una taza de café y musica con vibras tranquilas. Estoy disponible para conectar con cualquier contacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
