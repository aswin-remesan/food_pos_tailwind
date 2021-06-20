import Image from 'next/image'


function Card({name, image}) {
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
                    <Image classname="absolute rounded-full z-50" 
                        src={image}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            )}
            <h1 className="mt-5">{name}</h1>
        </div>
    )
}

export default Card