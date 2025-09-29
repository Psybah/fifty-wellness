import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon, ShoppingCart01Icon, StarIcon, ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

type Product = {
  title: string;
  description: string;
  image?: string;
  href?: string;
  badge?: string;
  price?: number;
  rating?: number;
};

type FeaturedProductsProps = {
  items: Product[];
};

export default function FeaturedProducts({ items }: FeaturedProductsProps) {
  return (
    <section className="relative py-20 bg-brand-secondary/10">
      {/* Top and bottom gradient masks for blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent" />
      <div className="container mx-auto mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
        <p className="text-muted-foreground mt-1">Curated picks to kick-start your wellness journey.</p>
      </div>

      <div className="container mx-auto">
        <div className="relative pt-12 md:pt-14">
          {/* Scroll controls - top right above cards */}
          <div className="absolute right-0 top-0 mt-2 flex gap-3 z-10">
            <button className="h-10 w-10 rounded-full flex items-center justify-center bg-white/70 text-foreground hover:bg-brand-secondary hover:text-white transition" onClick={() => scrollTrack(-1)}>
              <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
            </button>
            <button className="h-10 w-10 rounded-full flex items-center justify-center bg-white/70 text-foreground hover:bg-brand-secondary hover:text-white transition" onClick={() => scrollTrack(1)}>
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </button>
          </div>
          {/* Add margin-top to move cards lower below the control arrows */}
          <div id="featured-track" className="flex items-stretch gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-2 mt-6">
            {items.map((p, i) => (
              <article key={i} className="relative min-w-[280px] md:min-w-[340px] h-[420px] rounded-2xl overflow-hidden">
                {p.image && (
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                )}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                {/* Like icon */}
                <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition">
                  <HugeiconsIcon icon={FavouriteIcon} size={18} color="#ffffff" />
                </button>

                {/* Bottom content */}
                <div className="absolute left-4 right-4 bottom-3 text-white">
                  {p.badge && (
                    <div className="mb-2 text-xs px-2 py-0.5 bg-white/15 w-max rounded-full">{p.badge}</div>
                  )}
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium mb-1">{p.title}</h3>
                      <div className="text-sm opacity-90 flex items-center gap-2">
                        <span>${p.price?.toFixed(2) || '0.00'}</span>
                        <span className="opacity-60">•</span>
                        <span className="inline-flex items-center gap-1"><HugeiconsIcon icon={StarIcon} size={14} />{p.rating ?? 4.8}</span>
                      </div>
                    </div>
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white shrink-0 bg-brand-secondary">
                      <HugeiconsIcon icon={ShoppingCart01Icon} size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function scrollTrack(dir: -1 | 1) {
  const container = document.getElementById('featured-track') as HTMLDivElement | null;
  if (!container) return;
  const card = container.querySelector<HTMLElement>('article');
  const step = (card?.clientWidth || 300) + 16;
  container.scrollBy({ left: dir * step, behavior: 'smooth' });
}
