import Image from "next/image";
import ImageLabel from "@/components/imageLabel/ImageLabel";
import type { ImageKind, ImageRef } from "@/content/types";

interface GalleryProps {
  images: ImageRef[];
  kindLabels?: Record<ImageKind, string>;
}

const Gallery = ({ images, kindLabels }: GalleryProps) => {
  return (
    <div className="mt-8 columns-1 gap-6 sm:columns-2">
      {images.map((image) => (
        <figure key={image.src} className="relative mb-6 break-inside-avoid">
          <Image
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
          {image.kind && kindLabels && (
            <ImageLabel as="figcaption" text={kindLabels[image.kind]} className="top-3 left-3" />
          )}
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
