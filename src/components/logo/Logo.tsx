import Image from "next/image";
import LogoDarkWide from "@/assets/logo/LogoDarkWide.svg";
import LogoLightWide from "@/assets/logo/LogoLightWide.svg";
import { cx } from "@/lib/cx";

interface LogoProps {
  alt: string;
  variant?: "ink" | "linen" | "auto";
  className?: string;
  priority?: boolean;
}

const Logo = ({ alt, variant = "auto", className, priority }: LogoProps) => {
  if (variant === "auto") {
    return (
      <>
        <Image src={LogoLightWide} alt={alt} className={cx(className, "dark:hidden")} priority={priority} />
        <Image src={LogoDarkWide} alt={alt} className={cx(className, "hidden dark:block")} priority={priority} />
      </>
    );
  }

  return (
    <Image
      src={variant === "ink" ? LogoLightWide : LogoDarkWide}
      alt={alt}
      className={className}
      priority={priority}
    />
  );
};

export default Logo;
