# E-commerce product page Solution

This is the solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

## ScreenShot
 
 ### for desktop
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)

### for mobile
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)


### Links

- Solution URL: https://github.com/RISHABH-cyber-blip/self-learning-react-shoe-cart
- Live Site URL: https://rishabh-cyber-blip.github.io/self-learning-react-shoe-cart/

## My process

### Built with

- JavaScript (ES modules) 
- React 19.3.0
- React DOM 19.3.0
- React Router DOM 7.18.4
- Tailwind CSS 4.3.3
- Vite 8.3.2
- GitHub and GitHub Pages
- Mobile-first workflow

### What I learned

# Mobile Responsive
 ml-0 mt-5 md:ml-0 md:mt-10 
 md:absolute md:inset-x-auto md:right-0 md:top-full md:mt-1
 md:w-80 md:max-w-[calc(100vw-2rem)

 This above code is for mobile and responsive ,the md is prefix for 768 or more width devices so where md use the css aplly on 768+ width and default css like ml-0 mt-5 used for below 768 width devices so before this project i don't know how to make thing mobile responsive now i know for which device i should use which prefix 

 # CartContext

1. I already know about the cart context But after this project I'm much more confident and experienced before the project.This project helped me more to understand the cart context and how it works.

2. 
```const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (!existingItem) {
        return [...prevItems, item];
      }

      return prevItems.map((cartItem) =>
        cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    });
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};
```

This part of code helps me understand how to use CartContext here. What we do, we use createContext from React and useCartContext and Cart. How we made CartProvider, where our cart items of array are stored and we manage them. Like we made a function addToCart, how we provide CartContext for the children for all the components, and values are  provide  a function through a CartContextProvider.


# Navbar
? "text-[#222222] after:absolute after:bottom-0 after:top-12 after:left-0 after:h-1 after:w-full after:bg-orange-500"

In the navbar, I already know about all the CSS and HTML and function that are used in that. But the new thing I learned is after effect in the CSS in my navbar. When I go to different pages, there is some CSS part on my navbar's elements. This CSS I saw the first time.This CSS basically means a new element or virtual element on my text.

# Pcontent

```
  const handleAddToCart = () => {
  if (count === 0) {
    alert("Please select a minimum quantity of 1 before adding to cart.");
    setCount(1); 
    return;
  }
  else if(count > 10){
    alert("You have exceeded the maximum quantity of 10 items. Please reduce the quantity.");
    setCount(10); 
    return;
  }
  else{
    alert(`Added ${count} item(s) to the cart.`);
  }

  addToCart({
    id: "fall-limited-edition-sneaker",
    title: "Fall Limited Edition Sneaker",
    image: productImage1,
    price: 125,
    quantity: count,
    });
  };
```

In this section I learn the main thing is that how to handle add to cart button. Here I what I do, I take edge cases. If user goes zero product then but happen, and if it takes lot of product will happen. So what we do, we use alert. If user goes to product quantity zero then it will alert that please select a minimum quantity of one before adding to cart. Or if it takes product quantity more than 10, it will say the product quantity is maximized or it will set count to 10. Or else if both are legal, then it will alert add it will alert added amount items to the cart. And the last thing add to cart, this add to cart comes from the use context that we made in cart context. Here we what we do, we take a add to cart and we will provide id, title, image, price, quantity, and it will give up cart of card context, and that card context provide everything this detail.


# pimage 

1. 
```
 {isLightboxOpen && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8"
        onClick={() => setIsLightboxOpen(false)}
     >
     

     Section the most important thing I learned is lightbox open. It is a CSS styling that disappears or blurs a background image and comes out a more z-index value and a fixed portion of HTML. So in this we will take a my image on the main focus the work of this light box upon is that.
   ```
2. 
```
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

    In pimage section, the most important and new thing I learned is how to handle my lightbox in mobile touch screen. So there is a method React useRef where I use touchstartx and what I do I made a handle to start. What is do? It's take in the x axis or where user fingerprints in the which portion in the which pixels it is in the current situation. And how it one handle touchend? So what it give see in the current position user moves finger to the left or the right, so where finger goes it will calculate and minus through our current finger. And what the difference we get we will see if it is more than 50 then we will move that image. So if it is more than 50 we will call our next image. If it is minus 50 or other things then it is previous image.


