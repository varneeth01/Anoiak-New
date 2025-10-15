export default function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "prose prose-lg prose-slate dark:prose-invert max-w-none",
        "[--tw-prose-body:theme(colors.slate.200)]",
        "[--tw-prose-headings:theme(colors.cyan.300)]",
        "[--tw-prose-lead:theme(colors.slate.300)]",
        "[--tw-prose-links:theme(colors.cyan.300)]",
        "[--tw-prose-bold:theme(colors.slate.100)]",
        "[--tw-prose-hr:theme(colors.white/0.08)]",
        "[--tw-prose-quotes:theme(colors.slate.200)]",
        "[--tw-prose-quote-borders:theme(colors.cyan.700)]",
        "[--tw-prose-captions:theme(colors.slate.400)]",
        "[--tw-prose-code:theme(colors.sky.200)]",
        "[--tw-prose-pre-code:theme(colors.slate.100)]",
        "[--tw-prose-pre-bg:theme(colors.slate.900)]",
        "[--tw-prose-th-borders:theme(colors.slate.700)]",
        "[--tw-prose-td-borders:theme(colors.slate.800)]",
        "prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-cyan-400",
        "prose-img:rounded-xl prose-img:shadow-lg",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
