import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  title: string;
  description: string;
  cta?: string;
  image?: string;
};

type ServicesProps = {
  items: Service[];
};

export default function Services({ items }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const cards = gsap.utils.toArray<HTMLElement>(sectionRef.current.querySelectorAll('.bento-card'));
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: 'power1.out',
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Bento grid: 3 columns (2-1-2 stacking). Use first 5 items to match layout.
  const a = items[0];
  const b = items[1];
  const c = items[2]; // tall center
  const d = items[3];
  const e = items[4];

  const pickImage = (title?: string) => {
    if (!title) return undefined;
    const t = title.toLowerCase();
    if (t.includes('team') || t.includes('session')) return '/assets/services/team-sessions.jpeg';
    if (t.includes('policy') || t.includes('framework')) return '/assets/services/policy.jpeg';
    if (t.includes('tailored') || t.includes('wellness') || t.includes('yoga')) return '/assets/services/yoga.jpeg';
    return undefined;
  };

  return (
    <section ref={sectionRef} className="container mx-auto py-12">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <p className="text-muted-foreground mt-1">Personalized programs with expert support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-3 md:h-[520px]">
          {c && (
            <Card
              item={{ ...c, image: pickImage(c?.title) || c?.image }}
              className="bento-card h-[180px] md:h-[200px]"
              solidBg="primary"
              noImage
              place="bottom"
              sideVariant
            />
          )}
          {b && (
            <Card item={{ ...b, image: pickImage(b?.title) || b?.image }} className="bento-card h-[320px] md:h-[320px]" sideVariant place="bottom" ctaBg="secondary" />
          )}
        </div>

        <div className="md:h-[520px]">
          {a && (
            <Card item={{ ...a, image: pickImage(a?.title) || a?.image }} className="bento-card h-[480px] md:h-full" imageFirst forceGradient place="bottom" sideVariant />
          )}
        </div>

        <div className="flex flex-col gap-2 md:gap-3 md:h-[520px]">
          {d && (
            <Card item={{ ...d, image: pickImage(d?.title) || d?.image }} className="bento-card h-[320px] md:h-[320px]" sideVariant place="bottom" />
          )}
          {e && (
            <Card
              item={e}
              className="bento-card h-[180px] md:h-[200px]"
              solidBg="secondary"
              noImage
              place="bottom"
              sideVariant
            />
          )}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  item: Service;
  className?: string;
  imageFirst?: boolean;
  noImage?: boolean;
  solidBg?: 'primary' | 'secondary';
  place?: 'top' | 'center' | 'bottom';
  titleClass?: string;
  sideVariant?: boolean;
  forceGradient?: boolean;
  ctaBg?: 'primary' | 'secondary';
};

function Card({ item, className, imageFirst = false, noImage = false, solidBg, place = 'center', titleClass, sideVariant = false, forceGradient = false, ctaBg }: CardProps) {
  return (
    <article className={`relative border rounded-2xl overflow-hidden ${className || ''} ${solidBg ? (solidBg === 'primary' ? 'bg-brand-primary' : 'bg-brand-secondary') : 'bg-card'}`}>
      {/* Top-right explore icon on all cards with hover animation */}
      <button className={`group absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full ${ctaBg ? (ctaBg === 'secondary' ? 'bg-brand-secondary' : 'bg-brand-primary') : 'bg-white/10'} backdrop-blur-sm transition-transform duration-200 hover:scale-105 ${ctaBg ? '' : 'hover:bg-white/20'}`}>
        <span className="transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} color="#ffffff" />
        </span>
      </button>
      {!noImage && (
        <div className={`absolute inset-0 ${item.image ? '' : 'hidden'}`}>
          {item.image && (
            <img src={item.image} alt="service" className={`h-full w-full object-cover ${imageFirst ? '' : 'opacity-80'}`} />
          )}
          {/* Softer, shorter bottom gradient for image cards */}
          {((item.image && !noImage) || forceGradient) && (
            <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-brand-secondary/55 via-brand-secondary/20 to-transparent" />
          )}
        </div>
      )}
      <div className={`relative z-10 h-full`}>
        <div className={`h-full w-full p-5 md:p-6 flex flex-col ${place === 'top' ? 'justify-start' : place === 'bottom' ? 'justify-end' : 'justify-between'} ${sideVariant ? 'items-start text-left' : 'items-start'} ${(solidBg || (!noImage && item.image)) ? 'text-white' : ''}`}>
          <div className={`${sideVariant ? 'max-w-[80%]' : ''}`}>
            <h3
              className={`mb-2 ${(solidBg || (!noImage && item.image)) ? 'text-white' : 'text-brand-secondary'} ${
                titleClass || 'text-lg md:text-xl font-medium'
              }`}
            >
              {item.title}
            </h3>
            <p className={`text-sm md:text-base ${(solidBg || (!noImage && item.image)) ? 'text-white/90' : 'text-muted-foreground'} max-w-prose`}>{item.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
