import Gallery from "@/components/gallery/Gallery";
import Section from "@/components/section/Section";
import type { ImageKind, ImageRef } from "@/content/types";
import { text } from "@/theme/typography";

interface ProjectGalleryProps {
  title: string;
  images: ImageRef[];
  kindLabels: Record<ImageKind, string>;
}

const ProjectGallery = ({ title, images, kindLabels }: ProjectGalleryProps) => {
  return (
    <Section labelledBy="bilder-titel" spacing="bottom">
      <h2 id="bilder-titel" className={text.groupTitle}>
        {title}
      </h2>
      <Gallery images={images} kindLabels={kindLabels} />
    </Section>
  );
};

export default ProjectGallery;
