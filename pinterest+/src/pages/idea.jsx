import { Category } from "../assets/category/category"
import { NewPins } from "../assets/new/new"

export default function Ideas() {

   return (

      <div className="pt-20 pl-20">

         <div className="pl-2 pr-2">

            <div className="items-end h-30 text-4xl font-bold flex">
               <h1>Explore the best of Pinterest+</h1>
            </div>
            <div className="text-3xl mt-13 font-bold flex justify-start mb-8">
               <h1>Browse by category</h1>
            </div>
            <div className="w-full flex justify-start" style={{ columnFill: "auto" }}>
               <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 w-full ltr self-start text-left">

                  {Category.map(cat => (
                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img key={cat.id} src={cat.img} className="brightness-70" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.2rem)]">{cat.title}</h1>
                     </div>
                  </div>   
                  ))}
               </div>
            </div>
            <div >
               <div>
                  <h1 className="text-3xl mt-10 font-bold flex justify-start mb-8">What's new on Pinterest+</h1>
               </div>

               <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 w-full">
                  {NewPins.map(pin => (
                     <div className="mb-8 break-inside-avoid">
                        <img key={pin.id} className="rounded-xl" src={pin.img} />
                     </div>
                  ))}

               </div>
            </div>
         </div>

      </div>

   )

}