import { useState } from 'react'
import '../../index.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
    <nav>
        <div className='h-20 w-full border-gray-600 border-b flex justify-between items-center px-4 sm:px-6 md:px-10'>
            <div>
                <h1 className='text-[#f3e639] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide'>MovieMania</h1>
            </div>

    <div className='image hidden md:flex  gap-5 lg:gap-8 [&>a]:cursor-pointer [&>a]:transition [&>a]:hover:scale-110 [&>a]:active:scale-90'>
     
               <a href="#">
                Popular <img src="/Images/fire.png" alt="fire-image"/>
                </a>  
                <a href="#">
                    Top Rated <img src="/Images/glowing-star.png" alt="star-image"/>
                    </a>  
                 <a href="#">
                    Upcoming <img src="/Images/partying-face.png" alt="image"/>
                    </a>  
        </div>

        <div 
  className="md:hidden text-white text-xl sm:text-2xl cursor-pointer"
  onClick={() => setOpen(true)}
>
  ☰
</div>
        </div>
        
        {/* sidebar */}
         <div className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-black p-6 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}`}>

          {/* Close Button */}
          <div 
            className="text-white text-2xl mb-6 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✖
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 text-white">

            <a className="flex items-center gap-2">
              Popular <img src="/Images/fire.png" className="w-5"/>
            </a>

            <a className="flex items-center gap-2 cursor-pointer">
              Top Rated <img src="/Images/glowing-star.png" className="w-5"/>
            </a>

            <a className="flex items-center gap-2">
              Upcoming <img src="/Images/partying-face.png" className="w-5"/>
            </a>

          </div>

        </div>
         
    </nav>
    </header>
  )
}

export default Navbar
