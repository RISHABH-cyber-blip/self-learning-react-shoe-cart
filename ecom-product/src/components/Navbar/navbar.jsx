import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-3 lg:px-6 py-6.5'>
             <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                  <h1 className="px-35 text-4xl font-extrabold tracking-tight text-black">
                    sneakers
                  </h1>
                   
                   


                  
             </div>
        </nav>
    </header>
  )
}

export default Navbar