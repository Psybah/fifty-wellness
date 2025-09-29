import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' });
  }, []);

  return (
    <footer ref={ref} className="mt-16 bg-brand-secondary text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo.png" alt="logo" className="h-10 w-10 invert" />
              <div>
                <h4 className="text-lg font-semibold">Fifty Firsts</h4>
                <p className="text-xs opacity-90">From here to your best self</p>
              </div>
            </div>
            <ul className="text-sm opacity-90 space-y-2">
              <li>hello@fiftyfirsts.com</li>
              <li>+(234) 813 100 0000</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Services</h5>
            <ul className="text-sm opacity-90 space-y-2">
              <li>Programs</li>
              <li>Workshops</li>
              <li>Coaching</li>
              <li>Training</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="text-sm opacity-90 space-y-2">
              <li>About</li>
              <li>Products</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="text-sm opacity-90 space-y-2">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-xs opacity-90 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Fifty Firsts. All rights reserved.</span>
          <span>Built by Cybersmith</span>
        </div>
      </div>
    </footer>
  );
}


