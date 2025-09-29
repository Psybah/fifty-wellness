import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons";

type QA = { q: string; a: string };

type Props = { items: QA[] };

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (!listRef.current) return;
    const cards = Array.from(listRef.current.children);
    gsap.from(cards, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out', stagger: 0.05 });
  }, []);
  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">FAQs</h2>
          <p className="text-muted-foreground">Your questions answered.</p>
        </div>
        <div className="md:col-span-2">
          <ul ref={listRef} className="divide-y">
            {items.map((qa, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;
              return (
                <li key={i} className="py-4">
                  <button
                    id={btnId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpen(isOpen ? null : i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpen(isOpen ? null : i);
                      }
                    }}
                  >
                    <span className="text-base md:text-lg pr-4">{qa.q}</span>
                    {/* Add/Remove icon inside brand-primary chip */}
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-brand-primary">
                      {isOpen ? (
                        <HugeiconsIcon icon={Remove01Icon} size={20} />
                      ) : (
                        <HugeiconsIcon icon={Add01Icon} size={20} />
                      )}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'} text-sm text-muted-foreground`}
                  >
                    {qa.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}


