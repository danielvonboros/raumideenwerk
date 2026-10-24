interface SkipLinkProps {
  label: string;
  target: string;
}

const SkipLink = ({ label, target }: SkipLinkProps) => {
  return (
    <a
      href={`#${target}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-linen dark:focus:bg-yellow dark:focus:text-ink"
    >
      {label}
    </a>
  );
};

export default SkipLink;
