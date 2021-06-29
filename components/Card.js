import Image from "next/image";

function Card({ name, image, price }) {
  return (
    <div
      className="
            bg-white

            space-x-2 p-2
            hover:shadow-blue
            rounded-xl
            shadow-md
            "
    >
      <Image
        className="rounded-xl"
        alt={name}
        src={image}
        height={1080}
        width={1920}
        layout="responsive"
      />

      <div className="flex items-center mt-2 lg:mt-5">
        <h1 className="flex items-center">{name}</h1>
        <p className="text-xs text-gray-500 flex flex-grow justify-end items-center">
          {price} AED
        </p>
      </div>
      <div className="flex justify-end">
        <p className="p-1 bg-green-400 rounded-lg cursor-pointer hover:bg-green-500 text-xs text-gray-100">
          Add to Cart
        </p>
      </div>
    </div>
  );
}

export default Card;
