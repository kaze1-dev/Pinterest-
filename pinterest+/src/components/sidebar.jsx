import { Images } from "../assets/images/index"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

export function Sidebar() {
   const [open, setOpen] = useState(false);
   const containerRef = useRef(null);
   const [show, setShow] = useState(false);
   const ideasRef = useRef(null);

   useEffect(() => {

      function handleClickOutside(e) {

         if (containerRef.current && !containerRef.current.contains(e.target)) {
            setOpen(false)
         }

      }
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }

   }, [])

   return (
      <>

         <div className=" w-20 h-screen fixed z-100  z-1000 bg-white scrollbar-hide overflow-hidden">

            <div className=" w-20 h-screen border-r border-gray-300 flex items-center  top-0 left-0 fixed bg-white scrollbar-hide overflow-hidden">

               <div className="bg-white flex flex-col justify-between items-center w-full h-150  py-6 sticky scrollbar-hide overflow-hidden">
                  <Link to="/" className="hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <div className="w-12 h-12 flex justify-center items-center">
                        <img className="active:scale-95 transition-transform" src={Images.logo} alt="" width={26} />
                     </div>
                  </Link>
                  <Link to="/" className="hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <div className="w-12 h-12 flex justify-center items-center">
                        <img className="active:scale-95 transition-transform" src={Images.home} alt="" width={26} />
                     </div>
                  </Link>
                  <Link to="ideas" className="hover:bg-gray-100 rounded-xl active:bg-gray-200 " >
                     <div className="z-100" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                        <div className="w-12 h-12 flex justify-center items-center">
                           <img className="active:scale-95 transition-transform" src={Images.compass} alt="" width={26} />
                        </div>
                        {show && (
                           <div className="fixed left-12 top-40 px-5 py-7" onMouseEnter={() => setShow(true)}>
                              <div className="fixed left-20 top-21 bg-white py-4 pl-5 pr-12 text-md flex flex-col gap-4 rounded-xl font-bold shadow-lg shadow-black/50" onMouseEnter={() => setShow(true)}
                                 onMouseLeave={() => setShow(false)}>
                                 <div>
                                    <h1>Art</h1>
                                 </div>
                                 <div>
                                    <h1>Beauty</h1>
                                 </div>
                                 <div>
                                    <h1>Food & Drink</h1>
                                 </div>
                                 <div>
                                    <h1>Home Decor</h1>
                                 </div>
                                 <div>
                                    <h1>Women's Fashion</h1>
                                 </div>
                                 <div>
                                    <h1>Men's Fashion</h1>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </Link>
                  <Link to="explore" className="hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <div className="w-12 h-12 flex justify-center items-center">
                        <img className="active:scale-95 transition-transform" src={Images.board} alt="" width={26} />
                     </div>
                  </Link>
                  <Link to="builder" className="hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <div className="w-12 h-12 flex justify-center items-center">
                        <img className="active:scale-95 transition-transform" src={Images.create} alt="" width={26} />
                     </div>
                  </Link>
                  <div className="hover:bg-gray-100 rounded-xl active:bg-gray-200" ref={containerRef}>
                     <div onClick={() => setOpen(prev => !prev)} className="w-12 h-12 flex justify-center items-center">
                        <img className="active:scale-95 transition-transform" src={Images.bell} alt="" width={26} />
                     </div>
                     {open && (
                        <div className="shadow-xl shadow-black/25 fixed left-22 top-30 z-500 px-4 py-4 flex flex-col gap-4 rounded-3xl bg-white">
                           <div className="">
                              <h1 className="font-bold text-2xl">Updates</h1>
                           </div>
                           <div className="flex gap-3">
                              <div className="flex justify-center items-center">
                                 <div className=" flex bg-gray-200 rounded-full p-3">
                                    <img src={Images.plus} alt="" className="w-10" />
                                 </div>
                              </div>
                              <p className="text-md">
                                 What ideas feel so You?<br />
                                 Create your first Pin to share <br />what inspires you!
                              </p>
                           </div>
                           <div className="flex gap-3">
                              <div className="flex justify-center items-center">
                                 <div className=" flex bg-gray-200 rounded-full p-3">
                                    <img src={Images.search} alt="" className="w-10" />
                                 </div>
                              </div>
                              <p className="text-md">
                                 Still searching? Explore ideas <br />related to Animal
                              </p>
                           </div>

                           <div></div>
                        </div>
                     )}
                  </div>


                  <div className="w-12 h-12 flex justify-center items-center hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <img className="active:scale-95 transition-transform" src={Images.message} alt="" width={26} />
                  </div>
                  <div className="w-12 h-12 flex justify-center items-center hover:bg-gray-100 rounded-xl active:bg-gray-200">
                     <img className="active:scale-95 transition-transform" src={Images.settings} alt="" width={26} />
                  </div>
               </div>

            </div>

         </div>

      </>
   )

}