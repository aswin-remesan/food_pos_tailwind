import Card from "./Card"


function Grid({results}) {
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
            
            {/* Cards */}
            <div className="
                    grid grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    3xl:grid-cols-4

                    gap-5
                    mx-auto
                    ">
                {results.map((card) => (
                    <Card 
                        key={card.image}
                        image={card.image}
                        name={card.name}
                        price={card.price} />
                ))}
            </div>
        </div>
    )
}

export default Grid
