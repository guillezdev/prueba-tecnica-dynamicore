import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import ThemeSwitcher from "../misc/theme-switcher";

const Navbar = () => {
  const location = useLocation();
  const navigationItems = [
    {
      title: "Lista de Usuarios",
      href: "/",
    },
    {
      title: "Formulario de Usuarios",
      href: "/formulario",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl justify-between items-center px-4">
        {/* Logo/Título a la izquierda */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">Prueba Técnica</span>
          </Link>
        </div>

        {/* Links centrados - Solo visible en desktop */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      location.pathname === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Sección derecha */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher - Siempre visible */}
          <ThemeSwitcher />

          {/* Mobile Menu Drawer - Solo visible en mobile */}
          <div className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="flex flex-row items-center justify-between">
                  <DrawerTitle>Navegación</DrawerTitle>
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Cerrar menú"
                    >
                      <XIcon className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="flex flex-col p-4 space-y-2">
                  {navigationItems.map((item) => (
                    <DrawerClose key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          location.pathname === item.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
