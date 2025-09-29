type Tier = {
  name: string;
  price: string;
  cta: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
};

type PricingProps = {
  tiers: Tier[];
};

export default function Pricing({ tiers }: PricingProps) {
  return (
    <section className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Pricing</h2>
        <p className="text-muted-foreground mt-1">Choose the plan that fits your needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiers.map((t, i) => (
          <article
            key={i}
            className={`rounded-2xl border overflow-hidden ${t.highlight ? 'bg-brand-secondary text-white' : 'bg-card'}`}
          >
            {t.badge && (
              <div className="px-4 pt-4">
                <span className={`text-xs px-2 py-0.5 rounded-full ${t.highlight ? 'bg-white/20 text-white' : 'bg-brand-secondary/15 text-brand-secondary'}`}>{t.badge}</span>
              </div>
            )}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-medium">{t.name}</h3>
                <div className="mt-2 text-3xl font-semibold" style={{ fontFamily: 'Quilone Variable, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>{t.price}</div>
              </div>
              <button className={`h-11 rounded-full w-full ${t.highlight ? 'bg-white text-foreground' : 'bg-brand-secondary text-white'} border transition hover:opacity-90`}>{t.cta}</button>
              <ul className={`text-sm space-y-2 mt-2 ${t.highlight ? 'text-white/90' : 'text-muted-foreground'}`}>
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--secondary))' }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


