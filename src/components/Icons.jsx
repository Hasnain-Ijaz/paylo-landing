// Small stroke icon set (inline SVG, no icon library needed)
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Bolt = (p) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
)
export const Globe = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
)
export const Chart = (p) => (
  <svg {...base} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>
)
export const Piggy = (p) => (
  <svg {...base} {...p}><path d="M19 10c0-3.3-3.1-6-7-6S5 6.7 5 10c0 1.7.8 3.2 2 4.3V18h3v-2h4v2h3v-3.7c1.2-1.1 2-2.6 2-4.3z" /><path d="M2 10h3M15 9h.01" /></svg>
)
export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const Card = (p) => (
  <svg {...base} {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
)
export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
)
export const Arrow = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const Plus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
)
export const Menu = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Star = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}><path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8L12 2z" /></svg>
)

export const Logo = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-2 font-display text-xl font-bold ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#2B59FF" />
      <path d="M11 23V9h6a5 5 0 0 1 0 10h-6" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    Paylo
  </span>
)
