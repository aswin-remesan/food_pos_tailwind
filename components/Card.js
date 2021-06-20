import Image from 'next/image'


function Card({name, image, price}) {
    return (
        <div className="
            bg-white
            cursor-pointer

            
            space-x-2 p-4
            hover:bg-blue-100
            rounded-xl
            shadow-md
            ">
            
            {image && (
                <div className="
                    relative
                    h-56
                    ">
                    <Image classname="rounded-xl z-50" 
                        src={image}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            )}
            <div className="flex items-center mt-5">
                <h1 className="flex items-center">{name}</h1>
                <p className="text-xs text-gray-500 flex flex-grow justify-end items-center">{price} AED</p>
            </div>

        </div>
    )
}

export default Card