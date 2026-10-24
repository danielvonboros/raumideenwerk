import { icons, type IconName } from "@/assets/icons";

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const icon = icons[name];
  return (
    <svg
      viewBox={icon.viewBox}
      width={icon.width}
      height={icon.height}
      fill={"fill" in icon ? icon.fill : undefined}
      aria-hidden="true"
      className={className}
    >
      {icon.content}
    </svg>
  );
};

export default Icon;
