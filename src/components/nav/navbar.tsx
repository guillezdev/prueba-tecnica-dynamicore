import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "../misc/theme-switcher";

const Navbar = () => {
  const location = useLocation();

  const navigationItems = [
    {
      title: "Lista de Usuarios",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">Prueba Técnica</span>
          </Link>
        </div>

        <div className="flex justify-center">
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

        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
