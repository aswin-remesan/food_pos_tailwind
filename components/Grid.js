import Card from "./Card";


const cards = [
    {
      name: "Lasagna",
      image: "/img/Mains/lasagna.jpg",
      price: 8,
    },
    {
      name: "Mac & Cheese",
      image: "/img/Mains/mac_cheese.jpg",
      price: 10,
    },
    {
      name:"Macaroni",
      image: "/img/Mains/macaroni.jpg",
      price: 15,
    },
    {
      name: "Noodle",
      image: "/img/Mains/noodle.jpg",
      price: 12,
    },
    {
      name: "Pizza",
      image: "/img/Mains/pizza.jpg",
      price: 25,
    },
    {
      name: "Rice Dish",
      image: "/img/Mains/rice_dish.jpg",
      price: 13,
    },
    {
      name: "Sushi",
      image: "/img/Mains/sushi.jpg",
      price: 34,
    },
  ];









function Grid() {
    return (
        <div className="
            bg-gray-100
            flex-grow
            h-screen
            pb-44
            pt-6
            pl-4
            pr-4
          
            overflow-y-auto
            scrollbar-hide">


            {/* cards */}
            <div className="
                    grid grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3

                    gap-5
                    mx-auto
                    ">
                {cards.map((card) => (
                <Card
                    key={card.image}
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    />
                ))}
            </div>


        </div>
    )
}

export default Grid