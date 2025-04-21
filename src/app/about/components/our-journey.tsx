import { SectionHeader } from "@/components/ui/section-header/section-header";
import Image from "next/image";
import { journey } from "./constants";
import clsx from "clsx";

export function OurJourney({ className }: { className: string }) {
  return (
    <section className={clsx(className)}>
      <SectionHeader
        titleText="Our Journey"
        titleDescription="From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide"
      ></SectionHeader>
      <div className="relative flex flex-col gap-10 mt-[50px]">
        <Image
          src="/someRingsLeft.png"
          width={250}
          height={100}
          alt="someCircleLeft"
          className="absolute -left-[100px] top-1/3 not-md:hidden"
          priority
        />
        <Image
          src="/someRingsRight.png"
          width={250}
          height={100}
          alt="someCircleRight"
          className="absolute -right-[100px] top-2/3 not-md:hidden"
          priority
        />
        {journey.map((value, index) => {
          return (
            <div key={index} className="flex w-[55%] gap-4">
              <div className="pt-[20px]">
                <h2>{value.age}</h2>
              </div>
              <div className="flex flex-col gap-3 bg-[var(--primary-black)] text-[var(--primary-white)] rounded-[20px] w-[100%] py-[30px] px-[60px]">
                <p className="text-[20px]">{value.title}</p>
                <p className="text-[16px] text-[var(--secondary-white)]">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
