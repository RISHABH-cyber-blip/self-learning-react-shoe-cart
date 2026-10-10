import React from 'react'
import Pimage  from './pimage.jsx'
import Pcontent from './pcontent.jsx'

const product = () => {
  return (
    <div className='flex flex-col md:flex-row  mt-10 md:mt-20 px-5 md:px-20'> 
      <div className=" md:w-1/2 w-full">
        <Pimage />
      </div>
      <div className="md:w-1/2 w-full">
        <Pcontent />
      </div>
    </div>
  )
}


export default product