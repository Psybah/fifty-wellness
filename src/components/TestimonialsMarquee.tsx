import { useEffect, useRef } from "react";
import gsap from "gsap";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

type Props = {
  items: Testimonial[];
};

export default function TestimonialsMarquee({ items }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.scrollWidth / 2;
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(trackRef.current, { x: 0 }, { x: -width, duration: 20, ease: "none" });
    // Stagger fade-in on mount
    const cards = Array.from(trackRef.current.children);
    gsap.from(cards.slice(0, Math.floor(cards.length / 2)), { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out', stagger: 0.08 });
    return () => tl.kill();
  }, []);

  // Duplicate array to create seamless loop
  const looped = [...items, ...items];

  return (
    <section className="container mx-auto py-12 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">What People Say</h2>
        <p className="text-muted-foreground mt-1">Real stories from our community.</p>
      </div>
      <div className="relative">
        <div ref={trackRef} className="flex gap-4 md:gap-6">
          {looped.map((t, i) => (
            <figure key={i} className="min-w-[260px] md:min-w-[360px] rounded-2xl border bg-card p-5">
              <blockquote className="text-sm md:text-base">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.author)}`}
                  alt={t.author}
                  className="h-8 w-8 rounded-full border"
                />
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.author}</span>{t.role ? ` • ${t.role}` : ''}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


