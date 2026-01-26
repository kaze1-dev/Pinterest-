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

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat1} alt="" className="brightness-70" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Animals</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat2} alt="" className="brightness-70" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Anime</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat3} alt="" className="brightness-70" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Art</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat4} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Quotes</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat5} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Design</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat6} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Home Decor</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat7} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Men's Fashion</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat8} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Nature</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat9} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Travel</h1>
                     </div>
                  </div>

                  <div className="relative bg-gray-200 mb-8 rounded-xl overflow-hidden break-inside-avoid">
                     <img src={Category.cat10} className="brightness-70" alt="" />
                     <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-bold text-[clamp(0.5rem,4vw,1.5rem)]">Women's <br></br>Fashion</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div >
               <div>
                  <h1 className="text-3xl mt-10 font-bold flex justify-start mb-8">What's new on Pinterest+</h1>
               </div>
               
               <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 w-full">
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new1} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new2} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new3} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new4} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new5} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new6} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new7} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new8} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new9} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new10} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new11} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new12} alt="" />
                  </div><div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new13} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new14} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new15} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new16} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new17} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new18} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new19} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new20} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new21} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new22} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new23} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new24} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new25} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new26} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new27} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new28} alt="" />
                  </div>
                  <div className="mb-8 break-inside-avoid">
                     <img className="rounded-xl" src={NewPins.new29} alt="" />
                  </div>
                  
               </div>
            </div>
         </div>

      </div>

   )

}