import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

function createIcon(path: React.ReactNode) {
  return function Icon({ size = 20, width, height, className, ...props }: IconProps) {
    const w = width ?? size;
    const h = height ?? size;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={w}
        height={h}
        className={className}
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const X = createIcon(
  <g>
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </g>
);

export const PanelLeft = createIcon(
  <g>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
  </g>
);

export const Check = createIcon(<path d="M20 6 9 17l-5-5" />);

export const ChevronDown = createIcon(<path d="m6 9 6 6 6-6" />);
export const ChevronUp = createIcon(<path d="m18 15-6-6-6 6" />);
export const ChevronLeft = createIcon(<path d="m15 18-6-6 6-6" />);
export const ChevronRight = createIcon(<path d="m9 18 6-6-6-6" />);

export const GripVertical = createIcon(
  <g>
    <circle cx="9" cy="5" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="19" r="1" />
  </g>
);

export const Circle = createIcon(<circle cx="12" cy="12" r="9" />);

export const MoreHorizontal = createIcon(
  <g>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </g>
);

export const Search = createIcon(
  <g>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-3.5-3.5" />
  </g>
);

export const Dot = createIcon(<circle cx="12" cy="12" r="2" />);

export const ArrowLeft = createIcon(<path d="M12 19 5 12l7-7" />);
export const ArrowRight = createIcon(<path d="m12 5 7 7-7 7" />);

// Pro-like named icons (stubs to match expected API)
export const ArrowRight02Icon = createIcon(<path d="M5 12h12M13 6l6 6-6 6" />);

export default {
  X,
  PanelLeft,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  GripVertical,
  Circle,
  MoreHorizontal,
  Search,
  Dot,
  ArrowLeft,
  ArrowRight,
  ArrowRight02Icon,
};

// Additional custom icons
export const Lotus = createIcon(
  <g>
    <path d="M12 18c3 0 5.5-2 6.5-4.5-1 .5-2.3.7-3.5.5 1-1.2 1.6-2.8 1.6-4.5-1.5 1.1-3 1.8-4.6 2-1.6-.2-3.1-.9-4.6-2 0 1.7.6 3.3 1.6 4.5-1.2.2-2.5 0-3.5-.5C6.5 16 9 18 12 18z" />
    <path d="M12 10c.8-1.5 1.2-3.1 1.2-4.8-1 .7-1.8 1.7-2.2 2.8-.4-1.1-1.2-2.1-2.2-2.8 0 1.7.4 3.3 1.2 4.8" />
  </g>
);

export const Yoga02Icon = Lotus;


