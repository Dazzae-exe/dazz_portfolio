import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  IconBrandX,
  IconMessage,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FooterContact() {
  const containerItem = {
    initial: {
      opacity: 0,
      y: -50,
      transition: {
        when: "afterChildren",
      },
    },
    onView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        when: "beforeChildren",
        staggerChildren: 0.5 * 2,
      },
    },
  };

  return (
    <motion.footer className="min-h-[100vh] w-full flex items-center">
      <div className="container mx-auto text-center bg-background w-full h-screen flex items-center justify-center flex-col">
        <motion.h2
          className="mb-4 border-b-0"
          variants={containerItem}
          initial="initial"
          whileInView="onView"
        >
          Quieres contactarme?
        </motion.h2>
        <Dialog>
          <motion.div
            variants={containerItem}
            initial="initial"
            whileInView="onView"
          >
            <DialogTrigger className={buttonVariants({ variant: "default" })}>
              Entra en contacto
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </DialogTrigger>
          </motion.div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="border-b-0">
                Entra en contacto
              </DialogTitle>
              <DialogDescription>
                Me encantaría saber de ti. Por favor, dejame un mensaje en mi
                correo en mi perfil de X para que nos podamos comunicar de
                manera directa y eficiente.
              </DialogDescription>
            </DialogHeader>
            <ul>
              <li className="flex items-center">
                <IconMessage className="w-4 h-4 mr-2" />
                <Link to="mailto:chrismarin0607@gmail.com">
                  chrismarin0607@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <IconBrandX className="w-4 h-4 mr-2" />
                <Link to="https://x.com/itsdazzae">itsdazzae</Link>
              </li>
              <li className="flex items-center">
                <IconBrandLinkedin className="w-4 h-4 mr-2" />
                <Link to="https://linkedin.com/in/christianmarindaza">
                  Christian Marín
                </Link>
              </li>
            </ul>
          </DialogContent>
        </Dialog>

        <motion.p
          variants={containerItem}
          initial="initial"
          whileInView="onView"
          className="mt-4"
        >
          2024 © Christian Marín
        </motion.p>
      </div>
    </motion.footer>
  );
}
