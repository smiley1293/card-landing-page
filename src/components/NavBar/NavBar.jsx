import { BsSunFill } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'

const NavBar = () =>{
   return (
      <nav className="flex items-center">
         <div className="flex items-center">
            <div className="text-[28px] font-bold mr-[10px]">NerdCard</div>
            <BsSunFill size={'24px'} color='#e9c46a' className='cursor-pointer'/>
         </div>
         <ul className='ml-auto text-[16px] font-semibold'>
            <HiOutlineMenu size={'24px'} className='cursor-pointer' />
         </ul>
      </nav>
   )
}
export default NavBar;