import React from 'react'
import productImage1 from '../../../images/image-product-1.jpg'
import productImage2 from '../../../images/image-product-2.jpg'
import productImage3 from '../../../images/image-product-3.jpg'
import productImage4 from '../../../images/image-product-4.jpg'
import iconClose from '../../../images/icon-close.svg'
import iconPrevious from '../../../images/icon-previous.svg'
import iconNext from '../../../images/icon-next.svg'

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

    const touchStartX = React.useRef(0)

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) diff > 0 ? nextImage() : previousImage()
    }

    return (
        <>
            {/* Main product gallery */}
            <div className="flex flex-col gap-5 w-full md:w-auto  md:ml-10">

                <div
                    className="relative w-full md:max-w-md touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="w-full aspect-square">
                        <img
                            src={images[selectedImage]}
                            alt="Fall Limited Edition Sneaker"
                            onClick={() => setIsLightboxOpen(true)}
                            className="md:rounded-xl w-full h-full object-cover cursor-pointer"
                        />
                    </div>

                    {/* Prev button (mobile only) */}
                    <button
                        onClick={previousImage}
                        className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        aria-label="Previous image"
                    >
                        <img src={iconPrevious} alt="" className="w-5 h-5" />
                    </button>

                    {/* Next button (mobile only) */}
                    <button
                        onClick={nextImage}
                        className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        aria-label="Next image"
                    >
                        <img src={iconNext} alt="" className="w-5 h-5" />
                    </button>
                </div>

                {/* Main gallery thumbnails */}
                <div className="flex gap-3 mt-5 justify-center sm:gap-5 md:justify-start hidden md:flex">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedImage(index)
                               }}
                            className={`w-16 h-16 xl:w-20 xl:h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                                selectedImage === index
                                    ? 'border-orange-500 opacity-60'
                                    : 'border-transparent hover:opacity-60'
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
                            className="absolute -top-8 right-0 text-3xl font-bold text-white orange-500 hover:text-orange-500 cursor-pointer"
                            aria-label="Close gallery"
                        >
                            <img src={iconClose} alt="Close" className="w-4 h-4 color-orange-500" />
                        </button>

                        {/* Previous image */}
                        <button
                            onClick={previousImage}
                            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-11 h-11 flex items-center justify-center hover:text-orange-500 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <img src={iconPrevious} alt="Previous" className="w-3 h-4" />
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
                            <img src={iconNext} alt="Next" className="w-3 h-4" />
                        </button>

                        {/* Lightbox thumbnails */}
                        <div className="mt-5 flex justify-center gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-14 h-14 sm:w-16 sm:h-16 overflow-hidden  rounded-xl border-2 cursor-pointer  ${
                                        selectedImage === index
                                            ? 'border-orange-500 '
                                            : 'border-transparent hover:opacity-60'
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