type SectionIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionIntro({
  index,
  eyebrow,
  title,
  copy,
}: SectionIntroProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">
          <span>{index}</span>
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-[-0.055em] text-slate-50 sm:text-5xl">
          {title}
        </h2>
      </div>
      {copy && <p className="max-w-sm text-sm leading-6 text-mist">{copy}</p>}
    </div>
  );
}
