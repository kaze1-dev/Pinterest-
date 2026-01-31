import { Images } from "../assets/images"

export default function Explore() {

   return (

      <>
      <div className= "w-full  pl-20 pt-20">
         <div className="px-4">
         <div className=" flex justify-center items-center">
            <img src= {Images.user} alt="" className="w-30" />
         </div>
         <div className="text-4xl font-bold flex justify-center items-center">
            <h1>User.</h1>
         </div>
         <div className="flex justify-center items-center mt-3 opacity-50">
            <img src= {Images.logo} alt="" />
            <p className="">user0001111</p>
         </div>
         <div className="flex justify-center items-center my-2 font-bold text-lg">
            <p>0 followers &middot; following</p>
         </div>
         <div className="flex justify-center items-center font-bold gap-4 my-4">
            <button className="bg-gray-300 py-2 px-4 rounded-xl">Share</button>
            <button className="bg-gray-300 py-2 px-4 rounded-xl">Edit Profile</button>
         </div>
         </div>

           <div className="px-2 flex justify-center items-center gap-6 text-lg font-medium mt-10">
         <button>Created</button>
         <button>Saved</button>
      </div>

      <div className="px-2 flex justify-center items-center py-15 text-xl font-bold">
         <h1>No created Pins yet</h1>
      </div>
      </div>

    
      </>
   )

}