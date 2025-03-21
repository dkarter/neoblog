import { Github, Twitter, Linkedin, Mail } from "lucide-react";
// Picture is being used as logo. Its grayscaled at homepage to match with the background glow.
// Same can be created with different colors using AI tools. Also logo can be different ^^
export const LOGO_URL = "/picture.webp";
export const SITE_LANGUAGE = "en-us";
export const SITE_NAME = "Max Taun";
export const SITE_TITLE = "Welcome";
export const SITE_DESCRIPTION =
  "Minimal dark portfolio theme, featuring easy customizations and well-commented code.";
export const SITE_IMAGE = "/astro-image.jpg";
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github-url.com",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter-url.com",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin-url.com",
    icon: Linkedin,
  },
  {
    name: "Contact",
    href: `/contact`,
    icon: Mail,
  },
];
