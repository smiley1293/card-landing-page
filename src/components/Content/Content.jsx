import { useSpring, animated } from 'react-spring'

import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'

import checkIconMobile from '../../assets/mobile/checkpoint.svg'

const Content = () => {
   const customer = useSpring({customers: 68686, from:{customers:0 }})

   const card = useSpring({cards: 66666, from:{cards:0}})

   return (
      <section className="flex-col">
         <div className="ml-[70px] mr-[51px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
            <div className="mt-16 gap-8 flex items-start">
               <FaUser size={'22px'} className='mt-[12px]' />
               <div className='text-[26px]'>
                  <animated.div>
                     {customer.customers.to(val => Math.floor(val))}
                  </animated.div>
                  <p className='text-[13px] font-semibold mb-[36px]'>Customers</p>
               </div>
            </div>
            {/* Num 2 */}
            <div className='gap-8 flex items-start mb-16'>
               <BsFillCreditCardFill size={'22px'} className='mt-[12px]' />
               <div className='text-[26px]'>
                  <animated.div>
                     {card.cards.to(val2 => Math.floor(val2))}
                  </animated.div>
                  <p className='text-[13px] font-semibold'>Cards Issued</p>
               </div>
            </div>
         </div>
         <div className='text-[13px] flex flex-col w-[100%] mt-[90px] font-semibold'>
            <div className='check-content'>
               <img  src={checkIconMobile} alt=''/>
               <p>Card reports sent to your phone every weeks</p>
            </div>
            {/*  */}
            <div className='check-content'>
               <img  src={checkIconMobile} alt=''/>
               <p>No external fees</p>
            </div>
            {/*  */}
            <div className='check-content'>
               <img src={checkIconMobile} alt=''/>
               <p>Set spending limits and restrictions </p>
            </div>
         </div>
      </section>
   )
}

export default Content;