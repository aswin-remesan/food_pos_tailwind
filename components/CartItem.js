import Image from "next/image"


function CartItem({image, name,price}) {
    return (
        <div className="
            flex items-center
            space-x-2
            rounded-xl
            shadow-md 
            ">

            {/* Image of item */}
            {image && (
                    <Image  className="rounded-l-xl "
                        src={image}
                        width={90}
                        height={70}
                    />
            )}
            
            <div className="rounded-r-xl">
                <h1 className="flex flex-grow">{name}</h1>
                
                <div className="pt-4 flex items-center">
                    <p className="text-xs">{price} AED</p>
                    
                </div>

            </div>
            
        </div>
    )
}

export default CartItem
