import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
// import LetsWorkTogether from "../ui/LetsWorkTogether";
import { cn } from "@/lib/utils";
import { Menu, Search, X } from "lucide-react";
import { LOGO_URL, SOCIALS } from "@/consts";

const NavItems = [
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function useCurrentPath() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return path;
}

function DesktopNavItem({ href, children, className }) {
  const activePath = useCurrentPath().startsWith(href);

  return (
    <div>
      <a
        href={href}
        className={cn(
          className,
          "hover:text-brand-500 focus:text-brand-500 relative block p-3 text-neutral-300 transition-all duration-300 focus:outline-0",
          activePath && "text-brand-500",
        )}
      >
        {children}
      </a>
    </div>
  );
}

function MobileNavItem({
  href,
  children,
  className,
  delay,
  setMobileMenuOpen,
}) {
  const activePath = useCurrentPath().startsWith(href);

  const handleMobileMenuClick = () => {
    setTimeout(() => setMobileMenuOpen(false), 200);
  };

  return (
    <a
      href={href}
      onClick={handleMobileMenuClick}
      className={cn(
        className,
        "focus:text-brand-600 block text-3xl font-semibold focus:outline-0",
        activePath ? "text-brand-600" : "text-neutral-200",
      )}
    >
      <span
        className="animate-scale-y block transition-all"
        style={{ "--delay": `${delay}s` }}
      >
        {children}
      </span>
    </a>
  );
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  // Removed menuToggle
  return (
    <Transition appear show={mobileMenuOpen}>
      <Dialog
        as="div"
        className="relative z-[99]"
        onClose={() => setMobileMenuOpen(false)} // Corrected line
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-x-0 top-4 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative my-2 w-full max-w-xl transform divide-y-2 divide-neutral-900 overflow-hidden rounded-lg border border-neutral-800/60 bg-neutral-950 px-4 transition-all">
                <div className="py-4">
                  <div className="flex items-center justify-between text-neutral-200">
                    <a href="/">
                      <img
                        alt="Logo"
                        src={LOGO_URL}
                        className="border-brand-500 size-10 rounded-full border-2"
                      />
                    </a>
                    <button
                      aria-label="Close Mobile Menu"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="size-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="py-8">
                    <nav className="mt-4 mb-2 flex flex-col items-center gap-y-7">
                      {NavItems.map((item, index) => (
                        <MobileNavItem
                          key={index}
                          href={item.href}
                          setMobileMenuOpen={setMobileMenuOpen}
                          delay={index * 0.1}
                        >
                          {item.name}
                        </MobileNavItem>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-6 py-6">
                  {SOCIALS.map((social, i) => (
                    <a
                      key={i}
                      className="h-6 w-6 origin-top cursor-pointer text-neutral-200 transition-colors duration-300"
                      href={social.href}
                      aria-label={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

function Navigation(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-neutral-950/70 p-4 backdrop-blur-md">
        <nav {...props}>
          <a href="/">
            <img
              alt="Logo"
              src={LOGO_URL}
              className="border-brand-500 size-10 rounded-full border-2 sm:size-12"
            />
          </a>
          <div className="hidden items-center justify-center font-medium sm:flex">
            {NavItems.map((item) => (
              <DesktopNavItem key={item.name} href={item.href}>
                {item.name}
              </DesktopNavItem>
            ))}
          </div>
          <div className="relative z-50 flex items-center gap-x-3">
            <a href="/search">
              <Search className="hover:text-brand-500 focus:text-brand-500 size-6 text-neutral-300 transition-all duration-300 sm:size-5" />
              <span className="sr-only">Go to search page</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block cursor-pointer sm:hidden"
              aria-label="Open Mobile Menu"
            >
              <Menu className="hover:text-brand-500 focus:text-brand-500 size-6 text-neutral-300 transition-all duration-300 sm:size-5" />
            </button>
          </div>
        </nav>
      </div>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}

export default function Header() {
  return (
    <Navigation className="flex max-w-xl items-center justify-between overflow-hidden sm:mx-auto sm:px-4" />
  );
}
