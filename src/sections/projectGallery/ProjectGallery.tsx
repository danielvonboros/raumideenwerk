import Gallery from "@/components/gallery/Gallery";
import Section from "@/components/section/Section";
import type { ImageRef } from "@/content/types";
import { text } from "@/theme/typography";

interface ProjectGalleryProps {
  title: string;
  images: ImageRef[];
}

const ProjectGallery = ({ title, images }: ProjectGalleryProps) => {
  return (
    <Section labelledBy="bilder-titel" spacing="bottom">
      <h2 id="bilder-titel" className={text.groupTitle}>
        {title}
      </h2>
      <Gallery images={images} />
    </Section>
  );
};

export default ProjectGallery;
