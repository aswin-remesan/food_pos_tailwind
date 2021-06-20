import Image from 'next/image'



function Category({id, page, Icon}) {
    return (
        <a href={page}>
            <div className="
            flex items-center
            space-x-2 p-4
            hover:bg-blue-200
            hover:text-white
            hover:animate-pulse
            rounded-xl
            cursor-pointer
            ">
                
                {/* {Icon &&(
                    <Icon className="h-8 w-8 text-blue-600" />
                )} */}


            {Icon &&(
                <Image
                    // className="rounded-full"
                    src={Icon}
                    width={30}
                    height={30}
                    layout="fixed"
                />)
            }


                <p className="
                hidden
                sm:inline-flex
                font-medium
                transform ease-in-out
                transition duration-200
                ">

                    {id}

                </p>
                
            </div>
        </a>
    )
}

export default Category
