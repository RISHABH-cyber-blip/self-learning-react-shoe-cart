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
        productImage4,
    ]

    // Main page image
    const [selectedImage, setSelectedImage] = React.useState(0)

    // Separate lightbox state and image
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)
    const [lightboxImage, setLightboxImage] = React.useState(0)

    const openLightbox = (index) => {
        setLightboxImage(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const previousImage = () => {
        setLightboxImage((prev) =>
            (prev - 1 + images.length) % images.length
        )
    }

    const nextImage = () => {
        setLightboxImage((prev) =>
            (prev + 1) % images.length
        )
    }

    // Keyboard navigation and Escape to close
    React.useEffect(() => {
        if (!isLightboxOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeLightbox()
            if (event.key === 'ArrowLeft') previousImage()
            if (event.key === 'ArrowRight') nextImage()
        }

        document.addEventListener('keydown', handleKeyDown)

        // Prevent background scrolling while open
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isLightboxOpen])

    return (
        <>
            {/* MAIN PRODUCT GALLERY */}
            <div className="flex flex-col gap-5 ml-0 md:ml-20">

                {/* Fixed main image: thumbnail selection updates this image */}
                <div className="w-full max-w-[400px]">
                    <button
                        type="button"
                        onClick={() => openLightbox(selectedImage)}
                        className="block w-full cursor-zoom-in"
                        aria-label="Open product image"
                    >
                        <img
                            src={images[selectedImage]}
                            alt="Fall Limited Edition Sneaker"
                            className="block w-full aspect-square object-cover rounded-xl"
                        />
                    </button>
                </div>

                {/* MAIN PAGE THUMBNAILS */}
                <div className="flex justify-center md:justify-start gap-5">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                setSelectedImage(index)
                                openLightbox(index)
                            }}
                            className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-xl border-2 cursor-pointer ${
                                selectedImage === index
                                    ? 'border-orange-500'
                                    : 'border-transparent hover:border-orange-500'
                            }`}
                            aria-label={`View product image ${index + 1}`}
                        >
                            <img
                                src={image}
                                alt={`Product thumbnail ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX — INDEPENDENT FROM THE MAIN GALLERY */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative w-full max-w-[360px] sm:max-w-[400px]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            className="absolute -top-10 right-0 text-3xl font-bold text-white hover:text-orange-500 transition-colors cursor-pointer"
                            aria-label="Close lightbox"
                        >
                            &times;
                        </button>

                        {/* PREVIOUS ARROW */}
                        <button
                            type="button"
                            onClick={previousImage}
                            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:text-orange-500 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="18"
                                viewBox="0 0 12 18"
                                fill="none"
                            >
                                <path
                                    d="M10 2L2 9L10 16"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* LARGE LIGHTBOX IMAGE */}
                        <img
                            src={images[lightboxImage]}
                            alt={`Product view ${lightboxImage + 1}`}
                            className="block w-full aspect-square object-cover rounded-xl"
                        />

                        {/* NEXT ARROW */}
                        <button
                            type="button"
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:text-orange-500 cursor-pointer"
                            aria-label="Next image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="18"
                                viewBox="0 0 12 18"
                                fill="none"
                            >
                                <path
                                    d="M2 2L10 9L2 16"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* LIGHTBOX THUMBNAILS */}
                        <div className="mt-6 flex justify-center gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => {
                                        setLightboxImage(index)
                                        setSelectedImage(index)
                                    }}
                                    className={`h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border-2 cursor-pointer ${
                                        lightboxImage === index
                                            ? 'border-orange-500 opacity-60'
                                            : 'border-transparent hover:border-orange-500'
                                    }`}
                                    aria-label={`Open image ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt={`Sneaker view ${index + 1}`}
                                        className="block h-full w-full object-cover rounded-lg"
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
