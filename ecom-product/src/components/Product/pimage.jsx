import React from 'react'
import productImage1 from '../../../images/image-product-1.jpg'
import productImage2 from '../../../images/image-product-2.jpg'
import productImage3 from '../../../images/image-product-3.jpg'
import productImage4 from '../../../images/image-product-4.jpg'

const Pimage = () => {
    const images = [productImage1, productImage2, productImage3, productImage4]
    const [selectedImage, setSelectedImage] = React.useState(images[0]);
    
  return (
        <div className='flex flex-col gap-5'>
            <div className=' w-full max-w-* object-cover rounded-xl'>
                    <div className='w-full md:w-100 aspect-square  aspect-square object-cover rounded'>
                        <img src={images[0]} alt="product" className='rounded-xl w-full h-full object-cover' />
                    </div>
             </div>
           <div className='flex gap-5 mt-5 justify-center md:justify-start'>
                {images.map((image,index)=>(
                    <button key={index} className='w-16 h-16 sm:w-20 sm:h-20 object-cover aspect-square object-cover rounded-xl hover:border-2 hover:border-orange-500 cursor-pointer'>
                        <img src={image} alt={`product-${index+1}`} className='rounded-xl w-full h-full object-cover' />
                    </button>
                ))}
            </div>
        </div>
  )
}

export default Pimage