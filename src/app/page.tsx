import { ServiceCard } from "./components/service-card";

const SERVICE_CARDS = [
  {
    img: "/image1.png",
    link: "/",
    styleType: "type1",
    text: "Search engine optimization",
  },
  {
    img: "/image2.png",
    link: "/",
    styleType: "type2",
    text: "Pay-per-click advertising",
  },
  {
    img: "/image3.png",
    link: "/",
    styleType: "type3",
    text: "Social Media Marketing",
  },
  {
    img: "/image4.png",
    link: "/",
    styleType: "type1",
    text: "Email Marketing",
  },
  {
    img: "/image5.png",
    link: "/",
    styleType: "type2",
    text: "Content Creation",
  },
  {
    img: "/image6.png",
    link: "/",
    styleType: "type4",
    text: "Analytics and Tracking",
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {SERVICE_CARDS.map(({ img, link, styleType, text }) => (
        <ServiceCard
          key={img}
          img={img}
          link={link}
          styleType={styleType}
          text={text}
        />
      ))}
    </div>
  );
}
