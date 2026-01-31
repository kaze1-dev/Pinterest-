import { Images } from "../assets/images"

export default function Create() {

   return (

      <div className="pt-20 pl-20 w-full">
         <div className="text-xl font-bold px-4 mt-4 mb-6">
            <h1>Create Pin</h1>
         </div>
         <div className="px-2 flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col gap-4 bg-gray-200 pt-30 sm:pt-40 pb-8 px-8 rounded-4xl">
               <img src={Images.arrow} alt="" className="w-8"/>
               <p className="text-center">
                  Choose a file or drag and<br /> drop it here
               </p>
               <div className="pt-15 sm:pt-25 text-sm">
               <p className="text-center">
                  We recommend using high quality .jpg files less<br /> than 20 MB
                  or .mp4 files less than 200 MB
               </p>
            </div>
            </div>
            <div>
            <hr className="py-2 border-gray-500" />
            </div>
            <div className="bg-gray-200 py-2 rounded-xl my-4 px-20 sm:px-30 ">
               <button>Save form URL</button>
            </div>
            
         </div>
         <div className= "flex justify-center items-center flex-col pb-10">
         <div>
            <div className="text-sm">
               <h1>Title</h1>
            </div>
            <div className="flex flex-grow-1">
               <textarea type="text" className=" bg-gray-300 rounded-xl w-65 sm:w-130 pl-4 py-3 " placeholder="Add a title" />
            </div>
         </div>
         </div>
         <div className="flex justify-center items-center flex-col">
            <div>
            <div className="text-sm">
               <h1>Description</h1>
            </div>
            <div>
               <textarea className="bg-gray-300 rounded-xl sm:w-130 w-65 pl-4 py-3" type="text" placeholder="Add description" />
            </div>
            </div>
         </div>
         <div className=" my-4 flex justify-center items-center flex-col">
            <div>
            <div className="text-sm">
               <h1>Link</h1>
            </div>
            <div>
               <input className="bg-gray-300 rounded-xl sm:w-130 pl-4 py-3 w-65" placeholder="Add a link" />
            </div>
            </div>
         </div>
         <div className=" my-4 flex justify-center items-center flex-col">
            <div>
            <div className="text-sm">
               <h1>Board</h1>
            </div>
            <div>
               <input className="bg-gray-300 rounded-xl sm:w-130 pl-4 py-3 w-65" placeholder="Choose a board" />
            </div>
            </div>
         </div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>

   )

}