import React from 'react'
import productImage1 from '../../../images/image-product-1.jpg'
import productImage2 from '../../../images/image-product-2.jpg'
import productImage3 from '../../../images/image-product-3.jpg'
import productImage4 from '../../../images/image-product-4.jpg'

const Pimage = () => {
    const images = [productImage1, productImage2, productImage3, productImage4]
  return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 h-50 w-50'>
                <div className='md:w-1/2'>
                    <img src={images[0]} alt="product" className='rounded-xl' />
                </div>
             </div>
           <div className='flex gap-5 md:flex-col md:w-1/2'>
                {images.map((image,index)=>(
                    <div key={index} className='w-20 h-20'>
                        <img src={image} alt={`product-${index+1}`} className='rounded-xl '  />
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Pimage