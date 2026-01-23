import { Pinss } from "../assets/pins/pins"

export function Pins() {

   return (

      <>
         <div className="grid grid-rows-[80px_1fr] min-h-screen grid-cols-[80px_1fr]">
            <div className="col-span-2"></div>
            <div className=""></div>
            <div className="pl-2 pr-2 overflow-y-auto">

               <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-4 gap-4 w-full">
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin1} alt="" />
                  </div>
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin2} alt="" />
                  </div>
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin3} alt="" />
                  </div>
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin4} alt="" />
                  </div>
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin5} alt="" />
                  </div>
                  <div className="mb-4 break-inside-avoid">
                     <img className="rounded-xl" src={Pinss.pin6} alt="" />
                  </div>
               </div>

            </div>
         </div>
      </>
   )

}