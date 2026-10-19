import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import productImage1 from '../../../images/image-product-1.jpg'
import iconMinus from '../../../images/icon-minus.svg'
import iconPlus from '../../../images/icon-plus.svg'
import iconCart from '../../../images/icon-cart.svg'

const Pcontent = () => {
  const { addToCart } = useContext(CartContext);

  const [count, setCount] = React.useState(0);

  const handleAddToCart = () => {
  if (count === 0) {
    alert("Please select a minimum quantity of 1 before adding to cart.");
    setCount(1); 
    return;
  }
  else{
    alert(`Added ${count} item(s) to the cart.`);
  }

  addToCart({
    id: "fall-limited-edition-sneaker",
    title: "Fall Limited Edition Sneaker",
    image: productImage1,
    price: 125,
    quantity: count,
    });
  };

  return (
    <div className='flex flex-col ml-0  md:ml-0 md:mt-10 mt-5 '>
        <h1 className='ml-0 text-[10px] font-bold uppercase tracking-[2px] text-gray-500 lg:text-[13px] sm:tracking-[3px]'>
            SNEAKER COMPANY
        </h1>

        <h2 className='ml-0 text-2xl font-bold text-gray-800 lg:text-4xl md:ml-0 md:mt-3'>
            Fall Limited Edition 
            <span className="block"> Sneaker</span>
        </h2>
          <p className=" mt-5 lg:mt-10 max-w-lg text-sm leading-7 text-[#7a7f87] lg:text-lg lg:leading-8">
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>

        <div className="flex flex-row items-center justify-between lg:flex-col md:items-start gap-2 mt-5">
          {/* Current price and discount */}
          <div className="flex items-center gap-3 ">
            <span className="text-2xl font-bold text-[#1d2026]">
              $125.00
            </span>

            <span className="rounded-md bg-[#1d2026] px-2 py-1 text-xs font-bold text-white">
              50%
            </span>
          </div>

          {/* Original price */}
          <span className="text-base lg:text-sm font-semibold whitespace-nowrap text-gray-400 line-through ">
            $250.00
          </span>
        </div>

        <div className='flex mt-4 mt-10 gap-3 flex-col md:flex-row'>

            <div className='flex w-full lg:max-w-32 items-center justify-between rounded-md bg-[#f7f8fd]'>
               <button onClick={() => setCount(Math.max(0, count - 1))} className='cursor-pointer'>
                 <img src={iconMinus} alt="minus" className='bg-[#f7f8fd] p-2 rounded-l-md' />
               </button>

               <input 
                type="text" 
                onChange={(e) => setCount(parseInt(e.target.value) || 0)} 
                value={count} 
                className='w-10 text-center bg-[#f7f8fd] text-[#1d2026] font-bold' />

                <button onClick={() => setCount(count + 1)} className='cursor-pointer'>
                  <img src={iconPlus} alt="plus" className='bg-[#f7f8fd] p-2 rounded-r-md' />
                </button>
            </div>

            <div className='flex w-full lg:max-w-45 items-center justify-between rounded-md bg-[#f7f8fd]'>
                <button onClick={handleAddToCart} className='md:w-max  md:flex-none flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-[#ff7d1a] py-3 text-black hover:bg-[#ff9f43] cursor-pointer'>
                  <img src={iconCart} alt="cart" className='inline-block mr-2 brightness-0' />
                  <span className=' font-bold'>Add to cart</span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Pcontent