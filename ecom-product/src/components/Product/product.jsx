import React from 'react'
import Pimage  from './pimage.jsx'
import Pcontent from './pcontent.jsx'

const product = () => {
  return (
    <div className='flex flex-col md:flex-row mt-0 md:mt-20 gap-10 px-0 md:px-20'>
      <div className=" md:w-1/2 w-full">
        <Pimage />
      </div>
      <div className="w-full px-5 md:w-1/2 md:px-0">
        <Pcontent />
      </div>
    </div>
  )
}


export default product