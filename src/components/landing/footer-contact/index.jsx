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
import { IconBrandX, IconMessage, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function FooterContact() {
  return (
    <footer className="rounded-3xl mt-16 min-h-[35vh] w-full flex items-end px-4 py-8">
      <div className="mx-auto text-center bg-primary text-primary-foreground w-full h-full rounded-xl py-16 shadow-lg">
        <h2 className="mb-4 border-b-0">
        Quieres contactarme? 
        </h2>
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "secondary" })}>
            Entra en contacto
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="border-b-0">
                Entra en contacto
              </DialogTitle>
              <DialogDescription>
                Me encantaría saber de ti. Por favor, dejame un mensaje en mi correo en mi perfil de X para que nos podamos comunicar de manera directa y eficiente.
              </DialogDescription>
            </DialogHeader>
            <ul>
              <li className="flex items-center">
                <IconMessage className="w-4 h-4 mr-2" />
                <Link to="mailto:chrismarin0607@gmail.com">chrismarin0607@gmail.com</Link>
              </li>
              <li className="flex items-center">
                <IconBrandX className="w-4 h-4 mr-2" />
                <Link to="https://x.com/itsdazzae">itsdazzae</Link>
              </li>
              <li className="flex items-center">
                <IconBrandLinkedin className="w-4 h-4 mr-2" />
                <Link to="https://linkedin.com/in/christianmarindaza">Christian Marín</Link>
              </li>
            </ul>
          </DialogContent>
        </Dialog>

        <p className="mt-4">2024 © Christian Marín</p>
      </div>
    </footer>
  );
}
