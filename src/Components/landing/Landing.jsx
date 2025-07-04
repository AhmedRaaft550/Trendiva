import landingImg from "../../../public/img/landingpho.webp";
import Clothes from "../clothes/Clothes";
import NewArrival from "./NewArrival";
import Image from "next/image";

const Landing = () => {
  return (
    <main className="relative" aria-label="Landing page main content">
      <section
        className="w-full relative"
        style={{ aspectRatio: "15 / 6" }}
        aria-label="Landing hero image"
      >
        <Image
          src={landingImg}
          alt="Landing hero showing stylish clothes"
          loading="lazy"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 100vw"
          placeholder="blur"
        />
      </section>

      <Clothes />
      <NewArrival />
    </main>
  );
};

export default Landing;
