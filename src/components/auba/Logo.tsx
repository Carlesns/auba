type LogoProps = {
  className?: string;
  strokeWidth?: number;
  title?: string;
};

export function Logo({ className, strokeWidth = 8, title = 'auba' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 472.79 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path d="M20,140 L58.99,20" />
      <path d="M58.99,20 L97.98,140" />
      <path d="M39.50,80 L78.49,80" />
      <path d="M125.27,20 L183.76,140" />
      <path d="M183.76,140 L242.25,20" />
      <path d="M269.54,20 L308.53,140" />
      <path d="M308.53,140 L347.52,20" />
      <path d="M374.81,140 L413.80,20" />
      <path d="M413.80,20 L452.79,140" />
      <path d="M394.31,80 L433.30,80" />
    </svg>
  );
}
