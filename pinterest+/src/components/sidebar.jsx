import { Images } from "../assets/images/index"
import "./sidebar.css"

export function Sidebar() {

   return(

      <div className="sidebar">

         <div>
            <img src={Images.logo} alt="" width={24} />
         </div>
         <div>
            <img src={Images.home} alt="" />
         </div>
         <div>
            <img src={Images.compass} alt="" />
         </div>
         <div>
            <img src={Images.board} alt="" />
         </div>
         <div>
            <img src={Images.create} alt="" />
         </div>
         <div>
            <img src={Images.bell} alt="" />
         </div>
         <div>
            <img src={Images.message} alt="" />
         </div>
         <div>
            <img src={Images.settings} alt="" />
         </div>

      </div>

   )

}