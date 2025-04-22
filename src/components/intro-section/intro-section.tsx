import Image from "next/image";

export function IntroSection({
  image,
  className,
  title,
  titleDescription
}: {
  image: string;
  className?: string;
  title: string;
  titleDescription: string;
}) {
  return (
    <section
      className={`${className} ${"bg-[var(--secondary-white)] rounded-[45px] items-center p-[40px] flex gap-[50px] justify-between not-md:flex-col"}`}
    >
      <Image
        src={image}
        alt="intro"
        width={530}
        height={520}
        className="h-[100%] max-w-[45%] not-md:max-w-[100%]"
        priority
      ></Image>
        <div className="flex flex-col gap-10 max-w-[50%] not-md:max-w-[100%]">
            <h1 className="text-center">{title}</h1>
            <p className="text-[20px] overflow-auto">{titleDescription}</p>
        </div>
    </section>
  );
}
