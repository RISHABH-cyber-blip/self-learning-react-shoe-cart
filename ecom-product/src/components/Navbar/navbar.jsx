import React from 'react'
import {NavLink} from 'react-router-dom'
import cartIcon from '../../../images/icon-cart.svg'
import avatarImage from '../../../images/image-avatar.png'
import Cart from '../Cart/cart'
import menu from '../../../images/icon-menu.svg'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import closeIcon from '../../../images/icon-close.svg'



const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const navItems = [
  { name: "Collections", path: "/collections" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
   ];


  return (
    <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-6 lg:px-6 py-3.5 md:py-6.5'>
             <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                  <div className='flex items-center  gap-3 md:gap-14'>
                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden focus:outline-none" aria-label="Open menu">
                      <img src={menu} />
                    </button>
                    <h1 className="px-3 text-[30px] sm:text-4xl font-bold sm-font-extrabold tracking-tight text-black">
                    sneakers
                  </h1>
                   
                   {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `hidden lg:flex relative flex h-full items-center text-[16px] transition-colors no-underline 
                          ${
                            isActive
                              ? "text-[#222222] after:absolute after:bottom-0 after:top-12 after:left-0 after:h-1 after:w-full after:bg-orange-500"
                              : "text-gray-500 hover:text-gray-800"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>

                  <div className='flex items-center gap-5 md:gap-9'>
                        <div className="relative">
                            {cartItems.length > 0 && (
                              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                                {cartItems[0].quantity}
                              </span>
                            )}
                          <button
                          type="button"
                          onClick={() => setIsCartOpen((prev) => !prev)}
                          aria-label="Open cart"
                          aria-expanded={isCartOpen}
                          className="cursor-pointer"
                        >
                          <img src={cartIcon} alt="" className="h-4 w-4 md:h-6 md:w-6" />
                        </button>

                        {isCartOpen && (
                          <Cart onClose={() => setIsCartOpen(false)} />
                        )}
                      </div>

                    <img src={avatarImage}  alt="avatar" className='w-5 h-5 sm:w-10 sm:h-10 rounded-full ' />
                  </div>
             </div>

        </nav>
       {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <nav className="flex flex-col w-1/2 bg-white shadow-lg p-6 gap-4">
            <button onClick={() => setIsMenuOpen(false)} className="relative top-4  focus:outline-none" aria-label="Close menu">
              <img src={closeIcon} alt="Close menu" />
            </button>

            {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          ` relative flex top-8  items-center text-[13px] transition-colors no-underline text-black font-bold hover:text-gray-800`
                           
                        }
                      >
                        {item.name}
                      </NavLink>
              ))}
              
          </nav>
          </div>
        )}


    </header>
  )
}

export default Navbar