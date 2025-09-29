import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full", className)}>
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="logo" className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-semibold text-lg" style={{ fontFamily: 'Quilone Variable, ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif' }}>Fifty Firsts</span>
        </div>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6 text-base md:text-lg text-muted-foreground">
              <NavigationMenuItem>Trainers</NavigationMenuItem>
              <NavigationMenuItem>Blog</NavigationMenuItem>
              <NavigationMenuItem>Plans</NavigationMenuItem>
              <NavigationMenuItem>Services</NavigationMenuItem>
              <NavigationMenuItem>Contact Us</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="gap-2 rounded-full">
            <span>Sign Up</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: 'hsl(var(--brand-secondary))' }}>
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} color="#ffffff" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;


