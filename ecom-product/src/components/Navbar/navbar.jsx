import React from 'react'
import {NavLink} from 'react-router-dom'
import cartIcon from '../../../images/icon-cart.svg'
import avatarImage from '../../../images/image-avatar.png'
import Cart from '../Cart/cart'



const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
   const navItems = [
  { name: "Collections", path: "/collections" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
   ];


  return (
    <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-1 lg:px-6 py-6.5'>
             <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                  <div className='flex items-center gap-14'>
                    <h1 className="px-3 text-4xl font-extrabold tracking-tight text-black">
                    sneakers
                  </h1>
                   
                   {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `relative flex h-full items-center text-[16px] transition-colors no-underline 
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

                  <div className='flex items-center gap-12'>
                        <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsCartOpen((prev) => !prev)}
                          aria-label="Open cart"
                          aria-expanded={isCartOpen}
                          className="cursor-pointer"
                        >
                          <img src={cartIcon} alt="" className="h-6 w-6" />
                        </button>

                        {isCartOpen && (
                          <Cart onClose={() => setIsCartOpen(false)} />
                        )}
                      </div>

                    <img src={avatarImage} alt="avatar" className='w-10 h-10 rounded-full' />
                  </div>
             </div>

        </nav>
    </header>
  )
}

export default Navbar