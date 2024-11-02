import React from "react";
import { badgeVariants } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import me from "../../../assets/jpg/me.jpg";
import { PortfolioProvider } from "../../../context";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

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
];

export default function Hero() {
  const { loading } = React.useContext(PortfolioProvider);

  return (
    <div className="relative h-fit px-8 pt-8 max-w-6xl mx-auto">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-8 mb-12">
        <div>
          <figure className="w-48 h-48 rounded-full mb-4">
            {!loading ? (
              <motion.img
                src={me}
                alt="Christian Marín"
                className="w-full h-full object-cover rounded-full"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <Skeleton className="w-full h-full rounded-full bg-secondary" />
            )}
          </figure>
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
            <p className="mb-0.5 leading-snug">
              Desarrollador con mas de un año de experiencia laboral
              construyendo componentes, resolviendo bugs, solicitando llamadas
              al API y cumpliendo las tareas necesarias para la empresa.
            </p>
            <p className="mb-0.5 leading-snug">
              Actualmente, estoy enfocado en el desarrollo de aplicaciones web
              utilizando React, Next.js y Tailwind CSS.
            </p>
            <p className="mb-0.5 leading-snug">
              Ademas de programar, me gusta el futbol, incluso es mi deporte
              favorito. Disfruto los días productivos junto a una taza de café y
              musica con vibras tranquilas. Estoy disponible para conectar con
              cualquier contacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
