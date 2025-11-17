import { createContext, useContext, useMemo, useState } from "react";
import { LoadCart, LoadLiced } from "./LocaleStorege";

const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(LoadCart());
  const [likedProducts, setLikedProducts] = useState(LoadLiced())

  const data = useMemo(() => [
        { id: 1, stars: 3, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Classic', price:300, oldPrice:200, date:'2025-11-01', room:'Living Room', quantity: 1 },
        { id: 2, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Modern', price:300, date:'2025-11-03', room:'Bedroom', quantity: 1 },
        { id: 3, stars: 1, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Retro', price:500, oldPrice:200, date:'2025-10-28', room:'Dinning', quantity: 1 },
        { id: 4, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Nordic', price:800, date:'2025-11-05', room:'Outdoor', quantity: 1 },
        { id: 5, stars: 4, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Mini', price:300, date:'2025-11-02', room:'Bathroom', quantity: 1 },
        { id: 6, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Soft', price:300, oldPrice:200, date:'2025-10-30', room:'Bedroom', quantity: 1 },
        { id: 7, stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Glass', price:500, date:'2025-11-04', room:'Living Room', quantity: 1 },
        { id: 8, stars: 1, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Metal', price:800, oldPrice:200, date:'2025-10-29', room:'Dinning', quantity: 1 },
        { id: 9, stars: 4, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Sky', price:800, date:'2025-11-06', room:'Outdoor', quantity: 1 },
        { id: 10, stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Art', price:300, oldPrice:200, date:'2025-10-31', room:'Bathroom', quantity: 1 },
        { id: 11, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Simple', price:300, date:'2025-11-07', room:'Bedroom', quantity: 1 },
        { id: 12, stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Line', price:500, oldPrice:200, date:'2025-10-27', room:'Dinning', quantity: 1 },
        { id: 13, stars: 4, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa White', price:800, date:'2025-11-08', room:'Living Room', quantity: 1 },
        { id: 14, stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Deco', price:300, date:'2025-11-09', room:'Bathroom', quantity: 1 },
        { id: 15, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Base', price:300, oldPrice:200, date:'2025-10-26', room:'Outdoor', quantity: 1 },
        { id: 16, stars: 2, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Pure', price:500, date:'2025-11-10', room:'Living Room', quantity: 1 },
        { id: 17, stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Gold', price:800, oldPrice:200, date:'2025-11-11', room:'Dinning', quantity: 1 },
        { id: 18, stars: 3, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Crystal', price:800, date:'2025-11-12', room:'Outdoor', quantity: 1 }
  ], []);


  return(
    <GlobalContext.Provider value={{cartItems, setCartItems, data, likedProducts, setLikedProducts}}>
        {children}
    </GlobalContext.Provider>
  )
};

export const useGlobal = () => useContext(GlobalContext);
