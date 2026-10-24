import Image from "next/image";
import type { FrameColor, ImageRef } from "@/content/types";
import { cx } from "@/lib/cx";
import { frameClasses } from "@/theme/frames";
import { text } from "@/theme/typography";

interface FrameHeroProps {
  color: FrameColor;
  number: string;
  spine: string;
  title: string;
  subtitle: string;
  image: ImageRef;
  detail?: ImageRef;
}

const imageSizes = "(min-width: 768px) calc(100vw - 180px), calc(100vw - 64px)";

const FrameHero = ({ color, number, spine, title, subtitle, image, detail }: FrameHeroProps) => {
  return (
    <section
      className={cx("grid grid-cols-[64px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)]", frameClasses[color])}
    >
      <div
        className={cx(
          detail ? "row-span-3" : "row-span-2",
          "flex flex-col justify-between py-6 pl-4 md:py-10 md:pl-10",
        )}
      >
        <span className="text-[56px] leading-[0.8] font-bold tracking-[-0.06em] md:text-[110px]">{number}</span>
        <span className="spine text-lg italic md:text-2xl">{spine}</span>
      </div>

      <div className="relative aspect-[3/2] overflow-hidden md:aspect-[16/7]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes={imageSizes}
          className="object-cover"
          style={{ objectPosition: image.position }}
        />
      </div>

      <div className="flex flex-col gap-3 px-5 py-8 md:px-10 md:py-12">
        <h1 className={text.pageTitle}>{title}</h1>
        <p className={text.pageSubtitle}>{subtitle}</p>
      </div>

      {detail && (
        <div className="relative aspect-[3/2] overflow-hidden md:aspect-[16/6]">
          <Image
            src={detail.src}
            alt={detail.alt}
            fill
            sizes={imageSizes}
            className="object-cover"
            style={{ objectPosition: detail.position }}
          />
        </div>
      )}
    </section>
  );
};

export default FrameHero;
