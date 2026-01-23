
import { Images } from "../assets/images"

export function Header() {

     return (
    <header className="flex flex-row items-center w-full h-20 fixed top-0 left-18 pl-2 pr-2 z-100 bg-white">
      
      <div className="flex flex-row justify-start items-center w-full">

        <div className="flex justify-center items-center w-12 h-12 ">
          <img src= {Images.search} className="w-" />
        </div>
          
        <div className="flex justify-center items-center w-12 h-12">
          <img src= {Images.user} width={32} />
        </div>

        <div className="flex justify-center items-center w-6 h-6">
          <img src= {Images.chevron} className="text-gray-100" />
        </div>

      </div>

    </header>
  )


}