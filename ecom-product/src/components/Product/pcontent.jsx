import React from 'react'

const Pcontent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='flex flex-col ml-0  md:ml-0 md:mt-10 mt-5 '>
        <h1 className='ml-0 text-sm font-bold uppercase tracking-[2px] text-gray-500 sm:text-[13px] sm:tracking-[3px]'>
            SNEAKER COMPANY
        </h1>

        <h2 className='ml-0 text-3xl font-bold text-gray-800 sm:text-4xl md:ml-0 md:mt-3'>
            Fall Limited Edition 
            <span className="block"> Sneaker</span>
        </h2>
        <p className="mt-10 max-w-[500px] text-base leading-7 text-[#7a7f87] sm:text-lg sm:leading-8">
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>

        <div className="flex flex-col gap-2">
          {/* Current price and discount */}
          <div className="flex items-center gap-3 mt-5">
            <span className="text-2xl font-bold text-[#1d2026]">
              $125.00
            </span>

            <span className="rounded-md bg-[#1d2026] px-2 py-1 text-xs font-bold text-white">
              50%
            </span>
          </div>

          {/* Original price */}
          <span className="text-sm font-semibold text-gray-400 line-through">
            $250.00
          </span>
        </div>

        <div className='flex mt-4 mt-10 gap-3 flex-col md:flex-row'>

            <div className='flex items-center justify-between w-[120px] rounded-md bg-[#f7f8fd]'>
               <button onClick={() => setCount(Math.max(0, count - 1))} className='cursor-pointer'>
                 <img src="/images/icon-minus.svg" alt="minus" className='bg-[#f7f8fd] p-2 rounded-l-md' />
               </button>
                <span className='bg-[#f7f8fd] p-2 text-[#1d2026] font-bold'>{count}</span>
                <button onClick={() => setCount(count + 1)} className='cursor-pointer'>
                  <img src="/images/icon-plus.svg" alt="plus" className='bg-[#f7f8fd] p-2 rounded-r-md' />
                </button>
            </div>

            <div>
                <button  className='flex items-center justify-center gap-2 w-[250px] rounded-md bg-[#ff7d1a] py-3 text-black hover:bg-[#ff9f43] cursor-pointer'>
                  <img src="/images/icon-cart.svg" alt="cart" className='inline-block mr-2 brightness-0' />
                  <span className=' font-bold'>Add to cart</span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Pcontent