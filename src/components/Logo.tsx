import Image from "next/image";
import LogoLightWide from "@/assets/LogoLightWide.svg";
import LogoDarkWide from "@/assets/LogoDarkWide.svg";

interface LogoProps {
  variant?: "tinte" | "leinen" | "auto";
  className?: string;
  priority?: boolean;
}

export function Logo({ variant = "auto", className, priority }: LogoProps) {
  if (variant === "auto") {
    return (
      <>
        <Image
          src={LogoLightWide}
          alt="raumideenwerk"
          className={`${className ?? ""} dark:hidden`}
          priority={priority}
        />
        <Image
          src={LogoDarkWide}
          alt="raumideenwerk"
          className={`${className ?? ""} hidden dark:block`}
          priority={priority}
        />
      </>
    );
  }

  return (
    <Image
      src={variant === "tinte" ? LogoLightWide : LogoDarkWide}
      alt="raumideenwerk"
      className={className}
      priority={priority}
    />
  );
}
