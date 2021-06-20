import Category from "./Category"
import MainsIcon from "../public/icons/MainsIcon"


function Navbar() {
    return (
        <div className="
            bg-white
            p-2
            z-40
            h-screen
            max-w-[600px] 
            xl:min-w-[200px]
            shadow-lg
            ">
            

            {/* <Category id={"MAINS"} page={"/mains"} Icon={MainsIcon}/> */}
            <Category id={"MAINS"} page={"/mains"} Icon={"/icons/mains.svg"}/>
            <Category id={"STARTERS"} page={"/starters"} Icon={"/icons/starters.svg"}/>
            <Category id={"COCKTAILS"} page={"/cocktails"} Icon={"/icons/cocktails.svg"}/>
            <Category id={"DESSERT"} page={"/dessert"} Icon={"/icons/dessert.svg"}/>
            <Category id={"SNACKS"} page={"/snacks"} Icon={"/icons/snacks.svg"}/>
        

        
        </div>
    )
}

export default Navbar
