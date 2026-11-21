interface GlowOrbProps {
  color?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GlowOrb({ color = "primary", size = "md", className = "" }: GlowOrbProps) {
  const colorMap = {
    primary: "bg-primary-container/20",
    secondary: "bg-secondary/15",
    tertiary: "bg-tertiary-container/15",
  };

  const sizeMap = {
    sm: "w-48 h-48 blur-[80px]",
    md: "w-72 h-72 blur-[100px]",
    lg: "w-96 h-96 blur-[130px]",
    xl: "w-[30rem] h-[30rem] blur-[150px]",
  };

  return (
    <div
      className={`absolute rounded-full pointer-events-none select-none -z-10 ${colorMap[color]} ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    />
  );
}
