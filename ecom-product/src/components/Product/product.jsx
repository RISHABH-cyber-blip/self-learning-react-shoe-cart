import React from 'react'
import Pimage  from './pimage.jsx'
import Pcontent from './pcontent.jsx'

const product = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-20 margin-x-5 md:mx-20'> 
      <div className="">
        <Pimage />
      </div>
      <div>
        <Pcontent />
      </div>
    </div>
  )
}


export default product