import { SectionHeader } from "@/components/ui/section-header/section-header";
import Image from "next/image";
import { journey } from "./constants";
import clsx from "clsx";
import { LogoImage } from "@/components/icons/logoIcon";

export function OurJourney({ className }: { className: string }) {
  return (
    <section className={clsx(className)}>
      <SectionHeader
        titleText="Our Journey"
        titleDescription="From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide"
      ></SectionHeader>
      <div className="relative flex flex-col gap-[55px] mt-[50px]">
        <Image
          src="/someRingsLeft.png"
          width={250}
          height={100}
          alt="someCircleLeft"
          className="absolute -left-[100px] top-1/3 not-xl:hidden -z-10"
          priority
        />
        <Image
          src="/someRingsRight.png"
          width={250}
          height={100}
          alt="someCircleRight"
          className="absolute -right-[100px] top-2/3 not-xl:hidden -z-10"
          priority
        />
        {journey.map((value, index) => {
          const isFisrt = index === 0;
          const isPair = (index + 1) % 2 === 0;
          const isLast = index === journey.length - 1;
          return (
            <div
              key={index}
              className="flex even:justify-end not-md:even:justify-start"
            >
              <div className="flex w-[55%] not-md:w-[100%] relative gap-4 not-md:flex-col">
                <div
                  className={clsx(
                    "md:hidden absolute left-[48px] z-10 top-[20%] w-[2px] bg-[var(--primary-green)]",
                    {
                      "h-[300px]": !isLast,
                      "h-[70px]": isLast,
                    }
                  )}
                ></div>
                <div className="pt-[24px] flex not-md:pl-[35px] items-center gap-3">
                  <LogoImage
                    className="z-10 md:hidden"
                    height={27}
                    width={27}
                    color="var(--primary-green)"
                  ></LogoImage>
                  <h2>{value.age}</h2>{" "}
                </div>
                <div className="flex flex-col h-[175px] relative gap-3 bg-[var(--primary-black)] text-[var(--primary-white)] rounded-[40px] w-[100%] py-[30px] px-[100px]">
                  <LogoImage
                    className="absolute left-[30px] z-10 not-md:hidden"
                    height={27}
                    width={27}
                    color="var(--primary-green)"
                  ></LogoImage>
                  <LogoImage
                    className="absolute left-[41px] z-10 md:hidden"
                    height={15}
                    width={15}
                    color="var(--primary-green)"
                  ></LogoImage>
                  <div
                    className={clsx("absolute not-md:hidden", {
                      "h-[70%] left-[44px] w-[70%] border-b border-b-[var(--primary-green)] rounded-bl-[30px] top-[50%] border-l border-l-[var(--primary-green)]":
                        isFisrt,
                      "right-[calc(100%-44px)] w-[70%] rounded-r-[30px] border-b border-b-[var(--primary-green)] border-t border-t-[var(--primary-green)] border-r border-r-[var(--primary-green)]":
                        isPair && !isLast,
                      "left-[44px] w-[70%] rounded-l-[30px] border-t border-t-[var(--primary-green)] border-l border-l-[var(--primary-green)] border-b border-b-[var(--primary-green)]":
                        !isPair && !isFisrt,
                      "h-[132%] -top-[12%]": !isFisrt && !isLast,
                      "h-[34%] rounded-tr-[30px] -top-[12%] right-[calc(100%-44px)] w-[70%] border-t border-t-[var(--primary-green)] border-r border-r-[var(--primary-green)]":
                        isLast,
                    })}
                  ></div>
                  <p className="text-[20px]">{value.title}</p>
                  <p className="text-[16px] overflow-auto text-[var(--secondary-white)]">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
