import { useState } from 'react'
import clsx from "clsx";
import Styles from './ItemsContainerStyle.module.scss'

const ItemsContainer = () =>{

      const arr = [
        {
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:300,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'alt',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'sale',
            discount:'-50',
            name:'lampa',
            price:500,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'alt',
            discount:'-50',
            name:'lampa',
            price:300,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'sale',
            discount:'-50',
            name:'lampa',
            price:500
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:300,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'alt',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'sale',
            discount:'-50',
            name:'lampa',
            price:500,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'alt',
            discount:'-50',
            name:'lampa',
            price:300,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'sale',
            discount:'-50',
            name:'lampa',
            price:500
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800,
            oldPrice:200
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800
        }
    ]  
    
    const [curentIndex, setCurrentIndex] = useState(1)

    const isPhone = window.innerWidth < 450
    
    let towarsLength = isPhone ? 12 : 8

    const lastIndex = curentIndex * towarsLength
    const firstIndex = lastIndex - towarsLength
    const towarsItems = arr.slice(firstIndex, lastIndex)
    const  pageItems = Math.ceil(arr.length / towarsLength)

    const ChangePage = (page) =>{
        window.scrollTo({top:0, behavior:'smooth'})
        setCurrentIndex(page)
    }

    return(
        <section className={Styles.Shop_Towars_Items_Container}>
            {towarsItems.map((el, index) =>(
                <div key={index} className={Styles.Home_Products_Elements}>   
                    <div 
                       className={Styles.Home_Elements_Foto} 
                       style={{ backgroundImage: `url(${el.img})` }}
                    >
                        <div className={Styles.Home_Fotos_Status}>
                            <div className={Styles.Home_Element_Status}>{el.status}</div>
                            <div className={Styles.Home_Element_Discount}>{el.discount}</div>
                        </div>

                        <button className={Styles.Home_Products_BTN}>Add to cart</button>
                    </div>
                            <div className={Styles.Home_Elements_Info}>
                                <div className={Styles.Home_Products_Starts}>
                                    {Array(el.stars).fill(0).map((_, index) => (
                                        <span key={index}>★</span>
                                    ))
                                    }
                                </div>

                                <h3>{el.name}</h3>
                                <h4>${el.price} {el.oldPrice && <span>$ {el.oldPrice}</span>}</h4> 
                        </div>
                </div>
            ))}

            <div className={Styles.Shop_Towars_pagitanion}>
                {Array.from({length: pageItems}).map((_, index) => (
                    <button 
                        key={index}
                        className={clsx(Styles.Shop_Towars_pagitanion_BTN, {
                            [Styles.Shop_Towars_pagitanion_BTN_Active] : curentIndex === index + 1
                        })}                                              
                 
                        onClick={() => ChangePage(index + 1)}>
                            {index + 1}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default ItemsContainer