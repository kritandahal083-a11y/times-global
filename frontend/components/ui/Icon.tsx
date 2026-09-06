const paths = {
  "arrow-right": (
    <path d="M4 12h15m0 0l-6-6m6 6l-6 6" />
  ),
  "arrow-left": (
    <path d="M20 12H5m0 0l6-6m-6 6l6 6" />
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L14.5 10" />
    </>
  ),
  power: (
    <>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
    </>
  ),
  cooling: (
    <>
      <path d="M12 2v20M12 12l-7 3M12 12l7 3M12 12l-7-3M12 12l7-3" />
      <path d="M5 15l2-2M19 15l-2-2M5 9l2 2M19 9l-2 2" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M5 8.5v2c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-2M5.5 13.5v2.5c0 1.3 3 2 6.5 2s6.5-.7 6.5-2v-2.5" />
    </>
  ),
  fire: (
    <>
      <path d="M12 22c4.5 0 7-3 7-6.8 0-3.2-2-5.5-3.5-7.4-.3-.4-1-.2-1 .3l.2 2c.1.8-.6 1.4-1.3.9C12.2 10.2 12 8 12 6.5c0-2.4-1.8-4-2.6-4.6-.3-.2-.7.1-.6.5.4 2-.1 3.6-1.5 4.9C5.4 8.8 4 10.4 4 14.2 4 19 7 22 12 22z" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16v4" />
      <path d="M7 8l2 2-2 2" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="3" width="16" height="7" rx="1.5" />
      <rect x="4" y="14" width="16" height="7" rx="1.5" />
      <path d="M8 6.5h.01M8 17.5h.01M12 6.5H16M12 17.5H16" />
    </>
  ),
  rack: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <path d="M9 6.5h6M9 10h6M9 13.5h6M9 17h6M9.5 20.5h5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01M10 21v-3h4v3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4.5 4.5 0 01-.4-8.98A6 6 0 0118 9.6a4 4 0 01-.8 7.9H7z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  phone: (
    <path d="M5 3.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 013.5 5.7 2 2 0 015 3.5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 8.5v9M6.5 5.5v.01M11.5 17.5v-5.2a3 3 0 016 0v5.2M11.5 10.5v7" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8.5h2.5V5.5H14A3.5 3.5 0 0010.5 9v2H8v3h2.5v5.5H14V14h2.5l.5-3h-3V9a1 1 0 011-1z" />
    </>
  ),
  twitter: (
    <>
      <path d="M4 4l7.1 9.5L4.4 20h2.1l5.6-5.4L17 20h3l-7.4-9.9L18.9 4h-2.1l-5.1 5L8 4H4z" />
    </>
  ),
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  home: (
    <>
      <path d="M12 3.5l-7 8.5 14 0-7-8.5z" />
      <rect x="5" y="10" width="14" height="11" rx="1" />
      <path d="M10.5 14.5h3M12 14.5v6" />
    </>
  ),
  uptime: (
    <>
      <path d="M3 12a9 9 0 0118 0" />
      <path d="M12 8v4l2.5 1.5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  "repeat-arrow": (
    <>
      <path d="M4 9a7 7 0 0112.5-3.5M20 9a7 7 0 01-12.5 3.5" />
      <path d="M17 2.5V6h-3.5M7 21.5V18h3.5" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2.5L4.5 13.5h6L10 21.5l8.5-11h-6L13 2.5z" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
