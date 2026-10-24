import FrameHero from "@/components/frameHero/FrameHero";
import type { ServicePage } from "@/content/types";

interface ServiceHeroProps {
  service: ServicePage;
  number: string;
  spine: string;
}

const ServiceHero = ({ service, number, spine }: ServiceHeroProps) => {
  return (
    <FrameHero
      color={service.color}
      number={number}
      spine={spine}
      title={service.title}
      subtitle={service.subtitle}
      image={service.image}
    />
  );
};

export default ServiceHero;
