import CartItem from "./CartItem";

function Cart() {
  return (
    <div
      className="
            hidden
            h-screen
            bg-white
            lg:flex flex-col 
            w-80"
    >
      <div
        className="
                justify-between 
                items-center 
                text-gray-500 mb-5"
      >
        <div
          className="
                    shadow-md"
        >
          <h2
            className="
                        flex justify-center 
                        p-4 w-80
                        text-2xl font-semibold
                        "
          >
            Cart
          </h2>
        </div>

        {/* Body of cart */}
        <div className="p-5 grid grid-cols-1 gap-5">
          <CartItem
            image="/img/Mains/lasagna.jpg"
            name="Lasagna"
            price={8}
            quantity={2}
          />
          <CartItem
            image="/img/Mains/macaroni.jpg"
            name="Macaroni"
            price={15}
            quantity={1}
          />
          <CartItem
            image="/img/Mains/sushi.jpg"
            name="Sushi"
            price={34}
            quantity={5}
          />
          <CartItem
            image="/img/Dessert/ice_cream.jpg"
            name="Ice Cream"
            price={12}
            quantity={3}
          />
          <CartItem
            image="/img/Dessert/waffle.jpg"
            name="Waffle"
            price={34}
            quantity={1}
          />
          <CartItem
            image="/img/Cocktails/mountain_bramble.jpg"
            name="Mountain Bramble"
            price={12}
            quantity={3}
          />
          <CartItem
            image="/img/Snacks/apple_pie.jpg"
            name="Apple Pie"
            price={8}
            quantity={3}
          />
        </div>

        <div className="border-t-2 my-auto">Last Element</div>
      </div>
    </div>
  );
}

export default Cart;
