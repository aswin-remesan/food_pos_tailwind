import Image from "next/image"
import {SearchIcon} from "@heroicons/react/outline"


function Header() {
    return (
        <header className="
            sticky top-0 z-50
            bg-white
            p-2 lg:px-5
            shadow-md">

            {/* Logo */}
            <div className="flex items-center">
                <Image className="
                    object-contain"
                    src="/favicon.png"
                    height="40"
                    width="40"
                />

                {/* Search Bar */}
                <div className="
                    flex justify-center flex-grow">
                    <div className="
                        flex
                        ml-2
                        bg-gray-100
                        rounded-full
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

                {/* LogOut */}
                <h1 className="
                    hover:text-red-500
                    cursor-pointer">
                    Log Out
                </h1>
            </div>

            
        </header>
    )
}

export default Header
