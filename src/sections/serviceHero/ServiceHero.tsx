import FrameHero from "@/components/frameHero/FrameHero";
import type { ServicePage } from "@/content/types";

interface ServiceHeroProps {
  service: ServicePage;
  spine: string;
}

const ServiceHero = ({ service, spine }: ServiceHeroProps) => {
  return (
    <FrameHero
      color={service.color}
      spine={spine}
      title={service.title}
      subtitle={service.subtitle}
      image={service.image}
    />
  );
};

export default ServiceHero;
