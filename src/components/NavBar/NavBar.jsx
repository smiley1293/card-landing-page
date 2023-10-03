import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import useDarkMode from '../../useDarkMode'

import { useState } from 'react'

const NavBar = (props) => {
   const { isMobile } = props
   const [openMenu, setOpenMenu] = useState(false);
   const [isDarkMode, toggleDarkMode] = useDarkMode()

   const handleMenu = () => {
      setOpenMenu(!openMenu);
   }

   return (
      <nav className="flex items-center">
         <div className="flex items-center">
            <div className="text-[28px] font-bold mr-[10px]">EvoCard</div>
            {isDarkMode ? 
            (<BsSunFill size={'24px'} color='#e9c46a' className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>) : (<FaMoon size={'24px'} color='#e9c46a' className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>) }
            
            
         </div>
         <ul className=' ml-auto text-[16px] font-semibold transition-all duration-500 max-[767px]:text-[14px] flex gap-5 !mobile:flex !mobile:gap-10'>
            {openMenu && isMobile ? (
               <MdOutlineClose size={'24px'} className='cursor-pointer' onClick={handleMenu} />
            ) : !openMenu && isMobile ? (<HiOutlineMenu size={'24px'} className='cursor-pointer' onClick={handleMenu} />) : (
               <>
                  <li className='hover-menu'>Features</li>
                  <li className='hover-menu'>Menu</li>
                  <li className='hover-menu'>Our Story</li>
                  <li className='hover-menu'>Contact</li>
               </>
            )}
            {/* open menu */}
            {openMenu && (
               <div className='fixed right-8 text-black bg-white p-8 text-center z-10 text-[13px] mt-[40px]'>
                  <li className='cursor-pointer'>Features</li>
                  <li className='cursor-pointer'>Menu</li>
                  <li className='cursor-pointer'>Our Story</li>
                  <li className='cursor-pointer'>Contact</li>
               </div>
            )}

         </ul>
      </nav>
   )
}
export default NavBar;