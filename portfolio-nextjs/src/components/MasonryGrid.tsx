export default function MasonryGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-gap:20px] ${className}`}>{children}</div>;
}
