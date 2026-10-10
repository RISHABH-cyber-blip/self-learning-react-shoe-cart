import React from 'react'
import Pimage  from './pimage.jsx'
import Pcontent from './pcontent.jsx'

const product = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-20 md:gap-20'> 
      <div className=" md:w-1/2 w-full">
        <Pimage />
      </div>
      <div>
        <Pcontent />
      </div>
    </div>
  )
}


export default product