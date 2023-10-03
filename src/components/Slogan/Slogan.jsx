import Cards from '../../assets/desktop/isocard.svg'
const Slogan = () => {
   return (
      <section className="relative text-[36px] my-14 font-extrabold dark:text-white text-purple-800 !mobile:my-28 !mobile:grid !mobile:grid-cols-3 items-center !mobile:text-[48px] ">
         <div className="text-center !mobile:col-span-1 !mobile:col-start-2">
            <p>
               Earn <span className="dark:text-purple-300 text-pink-400">More</span>
            </p>
            <p>Pay Less</p>
            <button className="text-[20px] px-6 py-[6px] text-white font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 !mobile:text-[24px] !mobile:px-8 !mobile:py-2">Start</button>
            
         </div>
         <div className='mt-[70px] !mobile:absolute right-[-4rem] !mobile:mt-[60px]'>
               <img src={Cards} alt='credit-card' />
            </div>
      </section>
   )
}

export default Slogan;