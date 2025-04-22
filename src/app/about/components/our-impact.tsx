import { SectionHeader } from "@/components/ui/section-header/section-header";
import { impactNumnber } from "./constants";
import clsx from "clsx";

export function OurImpactNumber({ className }: { className?: string }) {
  return (
    <section className={className}>
      <SectionHeader
        titleText="Our Impact in Numbers"
        titleDescription="A snapshot of the milestones and achievements that drive our succeess"
      ></SectionHeader>
      <div className="flex w-[100%] not-md:flex-col mt-[40px]">
        {impactNumnber.map((value, index) => {
          const isFirst = index == 0;
          const isLast = index == impactNumnber.length - 1;
          return (
            <div key={index} className="w-[100%]">
              <div className={clsx("border-t-[2px] border-t-black h-[30px]",{
                "border-l-[1px] border-l-black rounded-tl-[15px]": !isFirst,
                "border-r-[1px] border-r-black rounded-tr-[15px]": !isLast
              })}></div>
              <div className="px-5">
                <p className="font-semibold text-[23px] not-md:text-center">{value.title}</p>
                <p className="font-[18px]  not-md:text-center">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
