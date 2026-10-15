import React from 'react'
import productImage1 from '../../../images/image-product-1.jpg'
import productImage2 from '../../../images/image-product-2.jpg'
import productImage3 from '../../../images/image-product-3.jpg'
import productImage4 from '../../../images/image-product-4.jpg'

const Pimage = () => {
    const images = [
        productImage1,
        productImage2,
        productImage3,
        productImage4
    ]

    const [selectedImage, setSelectedImage] = React.useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)

    const previousImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
    }

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length)
    }

    return (
        <>
            {/* Main product gallery */}
            <div className="flex flex-col gap-5 ml-10 md:ml-20">

                <div className="w-full max-w-md">
                    <div className="w-full aspect-square">
                        <img
                            src={images[0]}
                            alt="Fall Limited Edition Sneaker"
                            onClick={() => setIsLightboxOpen(true)}
                            className="rounded-xl w-full h-full object-cover cursor-pointer"
                        />
                    </div>
                </div>

                {/* Main gallery thumbnails */}
                <div className="flex gap-5 mt-5 justify-center md:justify-start">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedImage(index)
                                setIsLightboxOpen(true)}}
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                                selectedImage === index
                                    ? 'border-orange-500 opacity-60'
                                    : 'border-transparent hover:border-orange-500'
                            }`}
                            aria-label={`Show product image ${index + 1}`}
                        >
                            <img
                                src={image}
                                alt={`Product view ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div
                        className="relative w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute -top-10 right-0 text-3xl font-bold text-white hover:text-orange-500 cursor-pointer"
                            aria-label="Close gallery"
                        >
                            <img src="/images/icon-close.svg" alt="Close" className="w-6 h-6" />
                        </button>

                        {/* Previous image */}
                        <button
                            onClick={previousImage}
                            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-11 h-11 flex items-center justify-center hover:text-orange-500 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <img src="/images/icon-previous.svg" alt="Previous" className="w-6 h-6" />
                        </button>

                        {/* Large image */}
                        <img
                            src={images[selectedImage]}
                            alt={`Product view ${selectedImage + 1}`}
                            className="w-full aspect-square object-cover rounded-xl"
                        />

                        {/* Next image */}
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-11 h-11 flex items-center justify-center hover:text-orange-500 cursor-pointer"
                            aria-label="Next image"
                        >
                            <img src="/images/icon-next.svg" alt="Next" className="w-6 h-6" />
                        </button>

                        {/* Lightbox thumbnails */}
                        <div className="mt-5 flex justify-center gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-xl border-2 cursor-pointer ${
                                        selectedImage === index
                                            ? 'border-orange-500 opacity-60'
                                            : 'border-transparent hover:border-orange-500'
                                    }`}
                                    aria-label={`Show product image ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Pimage