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
                
                
                {/* Search Bar */}
                <div className="
                    flex justify-center
                    flex-grow">

                    <div className="
                        flex
                        ml-2 
                        
                        rounded-full 
                        bg-gray-100 
                        p-2">

                        <SearchIcon className="h-6 text-gray-600"/>
                    
                        <input className="
                            hidden
                            md:inline-flex ml-2 
                            items-center 
                            bg-transparent 
                            outline-none
                            placeholder-gray-500
                            flex-shrink"
                            type='text' placeholder='Search here' />
                    
                    </div>
                </div>

                <h1 className="
                    ml-2 font-medium 
                    flex justify-end 
                    hover:text-red-500
                    cursor-pointer">
                        Log Out
                </h1>


                

            </div>

            


            
        </div>
    )
}

export default Header
