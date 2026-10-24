import Image from "next/image";
import type { ImageRef } from "@/content/types";

interface GalleryProps {
  images: ImageRef[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="mt-8 columns-1 gap-6 sm:columns-2">
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={0}
          height={0}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="mb-6 h-auto w-full break-inside-avoid"
        />
      ))}
    </div>
  );
};

export default Gallery;
