export function Logo({ className = 'w-9 h-9', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Shoumik Aggarwal — home"
      {...props}
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="#141416"
        stroke="#2a2a2d"
        strokeWidth="1.5"
      />
      <text
        x="20"
        y="27.5"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="17"
        fontWeight="700"
      >
        <tspan fill="#00d4aa">{'{'}</tspan>
        <tspan fill="#fafafa">S</tspan>
        <tspan fill="#00d4aa">{'}'}</tspan>
      </text>
    </svg>
  );
}
