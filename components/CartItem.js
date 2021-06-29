import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

function CartItem({ image, name, price, quantity }) {
  const ItemPrice = price * quantity; //item final price

  return (
    <div
      className="
            flex items-center
            space-x-2
            rounded-xl
            shadow-md 
            "
    >
      {/* Image of item */}
      {image && (
        <Image className="rounded-l-xl " src={image} width={90} height={70} />
      )}

      {/* item name and price */}
      <div className="rounded-r-xl">
        <h1 className="flex flex-grow">{name}</h1>

        <div className="pt-4 flex items-center">
          <p className="text-xs">{price} AED</p>
        </div>
      </div>

      {/* add or subtract */}
      <div className="flex-grow p-2">
        <div className="flex flex-grow items-center justify-end ">
          <MinusCircleIcon className="text-red-500 w-5 cursor-pointer" />
          <div className="text-xs p-1 px-2 m-1 bg-gray-100 rounded text-black ">
            {quantity}
          </div>
          <PlusCircleIcon className="text-green-500 w-5 cursor-pointer" />
        </div>

        <div className="text-sm flex flex-grow justify-end">
          +{ItemPrice} AED
        </div>
      </div>
    </div>
  );
}

export default CartItem;
