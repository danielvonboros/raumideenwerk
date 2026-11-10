import Image from "next/image";
import BeforeAfter, { type BeforeAfterLabels } from "@/components/beforeAfter/BeforeAfter";
import type { FrameColor, ImageRef } from "@/content/types";
import { cx } from "@/lib/cx";
import { frameClasses } from "@/theme/frames";
import { text } from "@/theme/typography";

interface FrameHeroProps {
  color: FrameColor;
  number?: string;
  spine: string;
  title: string;
  subtitle: string;
  image: ImageRef;
  detail?: ImageRef;
  comparison?: { before: ImageRef; labels: BeforeAfterLabels };
}

const imageSizes = "(min-width: 768px) calc(100vw - 180px), calc(100vw - 64px)";

const imageFrame = "relative aspect-[3/2] overflow-hidden md:aspect-[16/7]";

const FrameHero = ({ color, number, spine, title, subtitle, image, detail, comparison }: FrameHeroProps) => {
  return (
    <section
      className={cx("grid grid-cols-[64px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)]", frameClasses[color])}
    >
      <div
        className={cx(
          detail ? "row-span-3" : "row-span-2",
          "flex flex-col py-6 pl-4 md:py-10 md:pl-10",
          number ? "justify-between" : "justify-end",
        )}
      >
        {number && (
          <span className="text-[56px] leading-[0.8] font-bold tracking-[-0.06em] md:text-[110px]">{number}</span>
        )}
        <span className="spine text-lg md:text-2xl">{spine}</span>
      </div>

      {comparison ? (
        <BeforeAfter
          before={comparison.before}
          after={image}
          labels={comparison.labels}
          sizes={imageSizes}
          priority
          className={imageFrame}
        />
      ) : (
        <div className={imageFrame}>
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
      )}

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
