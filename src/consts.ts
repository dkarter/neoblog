import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Picture is being used as logo. Its grayscaled at homepage to match with the background glow.
// Same can be created with different colors using AI tools. Also logo can be different ^^
export const LOGO_URL = "/picture.jpg";
export const SITE_LANGUAGE = "en-us";
export const SITE_NAME = "Dorian Karter";
export const SITE_TITLE = "Welcome";
export const SITE_DESCRIPTION = "Minimal dark portfolio theme, featuring easy customizations and well-commented code.";
export const SITE_IMAGE = "/astro-image.jpg";
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/dkarter",
    icon: SiGithub,
  },
  {
    name: "X",
    href: "https://x.com/dorian_escplan",
    icon: SiX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/doriankarter/",
    icon: Linkedin,
  },
  {
    name: "Contact",
    href: `/contact`,
    icon: Mail,
  },
];
