import Image from "next/image";

function SingleCard({ location, distance, img }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-150 ease-out">
      {/* left side */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right Side */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SingleCard;
