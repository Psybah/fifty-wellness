import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, { y: -40, opacity: 0, duration: 0.6, ease: "power2.out" });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className={cn("w-full sticky top-0 z-50", className)}>
      <div className="container mx-auto py-3">
        <div className={cn("flex items-center justify-between px-4 md:px-6 py-2 transition-all", scrolled ? "rounded-full shadow-md bg-white" : "")}>        
        <div className="flex items-center gap-3 h-9">
          <img src="/assets/logo.png" alt="logo" className="h-9 w-9 rounded-lg object-contain" />
          <div className="flex flex-col justify-center leading-none max-h-9 overflow-hidden">
            <span className="font-semibold text-[15px] md:text-base" style={{ fontFamily: 'Quilone Variable, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Fifty Firsts</span>
            <span className="text-[10px] md:text-[11px] text-muted-foreground" style={{ fontFamily: 'Quilone Variable, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Wellness</span>
          </div>
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
          <Button size="sm" className="gap-2 rounded-full bg-brand-secondary">
            <span>Sign Up</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} color="#000000" />
            </span>
          </Button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


