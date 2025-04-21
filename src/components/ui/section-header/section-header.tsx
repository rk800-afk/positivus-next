export function SectionHeader({
  titleText,
  titleDescription,
  className
}: {
  titleText: string;
  titleDescription: string;
  className?: string
}) {
  return (
    <div className={`${className} ${"w-[100%] flex items-center gap-[47px]"}`}>
      <h2 className="bg-[var(--primary-green)] px-[7px] rounded-[7px] max-w-[50%]">{titleText}</h2>
      <p className="max-w-[45%] text-[18px]">{titleDescription}</p>
    </div>
  );
}
