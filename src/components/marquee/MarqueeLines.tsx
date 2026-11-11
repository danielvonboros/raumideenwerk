interface MarqueeLinesProps {
  lines: string[];
  hidden?: boolean;
}

const MarqueeLines = ({ lines, hidden }: MarqueeLinesProps) => {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0">
      {lines.map((line) => (
        <li
          key={line}
          className="flex items-center gap-11 pr-11 text-[28px] leading-none font-black tracking-[-0.04em] whitespace-nowrap md:text-[40px]"
        >
          {line}
          <span aria-hidden="true" className="size-2.5 bg-linen" />
        </li>
      ))}
    </ul>
  );
};

export default MarqueeLines;
