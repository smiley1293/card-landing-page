import { FaUser } from 'react-icons/fa'

const Content = () => {
   return (
      <section className="flex-col">
         <div className="ml-[70px] mr-[51px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
            <div className="mt-16 gap-8 flex items-start">
               <FaUser size={'22px'} className='mt-[12px]' />
               <p className='text-[26px]'>10245
                  <p className='text-[13px] font-semibold mb-[36px]'>Customers</p></p>

            </div>
         </div>
      </section>
   )
}

export default Content;