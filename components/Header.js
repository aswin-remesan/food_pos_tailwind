import Image from "next/image"
import {SearchIcon} from "@heroicons/react/outline"



function Header() {
    return (
        <div className="
        sticky top-0 z-50 
        bg-white 
        items-center p-2 
        lg:px-5 
        shadow-md">


            
            <div className="flex items-center">
                <Image src="/Favicon.png"
                    height="40"
                    width="40"
                    layout="fixed"/>
                

                <h1 className="ml-2 font-medium flex justify-center flex-grow">Restaurant POS</h1>


                {/* Search Bar */}
                <div className="
                    justify-end
                    flex ml-2 
                    items-center 
                    rounded-full 
                    bg-gray-100 
                    p-2">

                    <SearchIcon className="h-6 text-gray-600"/>
                
                    <input className="
                        
                        md:inline-flex ml-2 
                        items-center 
                        bg-transparent 
                        outline-none
                        placeholder-gray-500
                        flex-shrink"
                        type='text' placeholder='Search here' />
                </div>

            </div>

            


            
        </div>
    )
}

export default Header
