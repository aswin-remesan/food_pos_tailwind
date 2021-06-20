import Card from "./Card";


const cards = [
    {
      name: "Lasagna",
      image: "/img/Mains/lasagna.jpg",
    },
    {
      name: "Mac & Cheese",
      image: "/img/Mains/mac_cheese.jpg",
    },
    {
      name:"Macaroni",
      image: "/img/Mains/macaroni.jpg",
    },
    {
      name: "Noodle",
      image: "/img/Mains/noodle.jpg",
    },
    {
      name: "Pizza",
      image: "/img/Mains/pizza.jpg",
    },
    {
      name: "Rice Dish",
      image: "/img/Mains/rice_dish.jpg",
    },
    {
      name: "Sushi",
      image: "/img/Mains/sushi.jpg",
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
            
            xl:mr-40
            overflow-y-auto
            scrollbar-hide">


            {/* cards */}
            <div className="
                    grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3

                    gap-5
                    mx-auto
                    ">
                {cards.map((card) => (
                <Card
                    key={card.image}
                    image={card.image}
                    name={card.name}
                    />
                ))}
            </div>


        </div>
    )
}

export default Grid























// function Grid() {
//     return (
//         <div className="
//             bg-gray-100
//             grid grid-cols-3
//             ">


            


//         </div>
//     )
// }

// export default Grid