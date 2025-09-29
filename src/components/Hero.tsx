import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Yoga02Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export function Hero({ title, description, className }: HeroProps) {
  return (
    <section className={cn("px-3 md:px-5 pt-3 pb-4", className)}>
      <div className="relative overflow-hidden rounded-3xl md:rounded-[28px] shadow-sm border bg-card" style={{ height: 'calc(92svh - 1.5rem)' }}>
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/assets/bg.mp4"
            autoPlay
            playsInline
            muted
            loop
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-4 normal-case">
              <span className="block">{title || "Restore your balance."}</span>
              <span className="block mt-1">
                <em className="not-italic md:italic font-medium">
                  <span className="mr-2">Reclaim Your</span>
                  <span className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full align-middle bg-brand-primary">
                    <HugeiconsIcon icon={Yoga02Icon} size={20} color="#ffffff" />
                  </span>
                  <span className="ml-2">Peace.</span>
                </em>
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
              {description || "Gentle practices, mindful routines, and expert guidance to restore your rhythm."}
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="rounded-full bg-white text-foreground px-3 h-12 shadow-md hover:bg-white hover:text-foreground hover:shadow-none transition-none"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="font-medium">Start Your Journey</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} color="#ffffff" />
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


