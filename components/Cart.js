import CartItem from "./CartItem";

function Cart() {
    return (
        <div className="
            hidden
            h-screen
            bg-white
            lg:flex flex-col 
            w-80">
            
            <div className="
                justify-between 
                items-center 
                text-gray-500 mb-5">
                

                <div className="
                    shadow-md">

                    <h2 className="
                        flex justify-center 
                        p-4 w-80
                        text-2xl font-semibold
                        ">
                            Cart
                    </h2>

                </div>

                {/* Body of cart */}
                <div className="p-5 grid grid-cols-1 gap-5">

                    <CartItem image="/img/Mains/lasagna.jpg" name="Lasagna" price="8"/>
                    <CartItem image="/img/Mains/macaroni.jpg" name="Macaroni" price="15"/>
                    <CartItem image="/img/Mains/sushi.jpg" name="Sushi" price="34"/>
                </div>


            </div>

            
        </div>
    )
}

export default Cart
