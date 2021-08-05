import Image from "next/image";
import BannerImg from "../components/images/airbnb-banner.webp";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image src={BannerImg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className="md:text-2xl sm:text-sm -mt-10">
          Not Sure Where to go? Perfect.
        </h1>
        <button className="text-white bg-black px-8 py-4 rounded-full shadow-md my-4 font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
