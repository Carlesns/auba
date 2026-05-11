type LogoProps = {
  className?: string;
  strokeWidth?: number;
  title?: string;
};

export function Logo({ className, strokeWidth = 12, title = 'auba' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 472.79 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      {/* A */}
      <path d="M20,140 L58.99,20 L97.98,140" />
      <line x1="39.50" y1="80" x2="78.49" y2="80" />
      {/* U */}
      <path d="M125.27,20 L183.76,140 L242.25,20" />
      {/* V */}
      <path d="M269.54,20 L308.53,140 L347.52,20" />
      {/* A */}
      <path d="M374.81,140 L413.80,20 L452.79,140" />
      <line x1="394.31" y1="80" x2="433.30" y2="80" />
    </svg>
  );
}
