import { Images } from "../assets/images/index"
import "./sidebar.css"

export function Sidebar() {

   return (

      <div className=" w-20 h-screen">

         <div className=" w-20 h-screen overflow-y-auto border-r border-gray-300 flex items-center fixed top-0 left-0">

            <div className="flex flex-col justify-around items-center h-150 w-full pt-12">
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.logo} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.home} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.compass} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.board} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.create} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.bell} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.message} alt="" width={26} />
               </div>
               <div className="w-12 h-12 flex justify-center items-center">
                  <img src={Images.settings} alt="" width={26} />
               </div>
            </div>

         </div>


      </div>

   )

}