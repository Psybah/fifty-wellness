import { useEffect, useRef } from "react";
import gsap from "gsap";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type StatsProps = {
  items: Stat[];
};

export default function Stats({ items }: StatsProps) {
  const refs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    refs.current.forEach((el, idx) => {
      if (!el) return;
      const end = Number(el.dataset.end ?? 0);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration: 1.2,
        delay: idx * 0.1,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.floor(obj.val).toString();
        },
      });
    });
  }, []);

  return (
    <section className="container mx-auto py-8 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl md:text-4xl italic font-medium">
              <span
                ref={(el) => {
                  if (el) refs.current[i] = el;
                }}
                data-end={s.value}
              >
                0
              </span>
              {s.suffix || ""}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


