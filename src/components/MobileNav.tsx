import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

type Props = {
  items?: { label: string; href?: string }[];
};

export default function MobileNav({ items = [
  { label: 'Trainers' },
  { label: 'Blog' },
  { label: 'Plans' },
  { label: 'Services' },
  { label: 'Contact Us' },
] }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-foreground"
        onClick={() => setOpen(true)}
      >
        <HugeiconsIcon icon={Menu01Icon} size={18} />
      </button>
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" />
          <aside className="absolute inset-0 bg-background flex flex-col" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex items-center gap-2">
                <img src="/assets/logo.png" alt="logo" className="h-8 w-8" />
                <span className="font-semibold">Fifty Firsts</span>
              </div>
              <button aria-label="Close menu" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white" onClick={() => setOpen(false)} autoFocus>
                <HugeiconsIcon icon={Cancel01Icon} size={18} />
              </button>
            </div>
            <nav className="p-4 grow overflow-auto">
              <ul className="space-y-3">
                {items.map((it, idx) => (
                  <li key={idx}>
                    <a href={it.href || '#'} className="block rounded-md px-3 py-2 text-base hover:bg-muted">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <button className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-full text-white" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                Sign Up
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-foreground">
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}


