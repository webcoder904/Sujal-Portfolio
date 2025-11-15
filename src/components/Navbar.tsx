"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 sm:inset-x-0 sm:max-w-xl sm:mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://webcoder904.github.io/Code-Nebula/">
                Code Nebula Portfolio
              </HoveredLink>
              <HoveredLink href="https://github.com/webcoder904/Ai-image-generator-web-app">
                AI Image generator
              </HoveredLink>
              <HoveredLink href="https://spectrum-folio.vercel.app/">
                Spectrum Folio
              </HoveredLink>
              <HoveredLink href="https://terminal-chatbot-react-app.vercel.app/">
                Terminal Portfolio
              </HoveredLink>
              <HoveredLink href="https://sujal-gemini-react-web-application.vercel.app/">
                Google Gemini clone
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Voice-Virtual-Assistant/">
                Eranx virtual assistant
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Mole-Game/">
                Whack a mole mouse game
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Updated-translators/">
                Translator
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Speech-recognition/">
                Speech recognition Model
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Sujal-menja/">
                Sujal Menja 3d cube game
              </HoveredLink>
              <HoveredLink href="https://webcoder904.github.io/Crossy-road/">
                Crossy road Game
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#blogs">Blogs</HoveredLink>
              <HoveredLink href="#services">Services</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="mailto:sujaltalreja04@gmail.com">
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/sujal-kishore-kumar-talreja-65975b216/">
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://www.instagram.com/sujal.talreja.2004.ds/">
                Instagram
              </HoveredLink>
              <HoveredLink href="https://x.com/sujal_k65124?t=NqLU8lxQoBS_sRXVJaARsQ&s=08">
                X(Twitter)
              </HoveredLink>
              <HoveredLink href="tel:+91 7574021120">Mobile</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
