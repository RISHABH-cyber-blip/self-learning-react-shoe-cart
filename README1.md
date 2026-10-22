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


