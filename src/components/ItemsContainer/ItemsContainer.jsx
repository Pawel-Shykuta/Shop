import { useState } from 'react'
import clsx from "clsx";
import Styles from './ItemsContainerStyle.module.scss'
import { useGlobal } from '../../utils/GlobalContext';

const ItemsContainer = ({towarsItemsArr}) =>{

    const {setCartItems, cartItems} = useGlobal()
    
    const [curentIndex, setCurrentIndex] = useState(1)

    const isPhone = window.innerWidth > 450
    
    const  towarsLength = isPhone ? 12 : 8

    const lastIndex = curentIndex * towarsLength
    const firstIndex = lastIndex - towarsLength
    const towarsItems = towarsItemsArr.slice(firstIndex, lastIndex)
    const  pageItems = Math.ceil(towarsItemsArr.length / towarsLength)

    const ChangePage = (page) =>{
        window.scrollTo({top:0, behavior:'smooth'})
        setCurrentIndex(page)
    }



    const AddToCart = (el) => {
        const existingItem = cartItems.find(item => item.id === el.id);

        if (existingItem) {
            setCartItems(prev =>
                prev.map(item =>
                    item.id === el.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems(prev => [...prev, { ...el, quantity: 1 }]);
        }
    };

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

                        <button className={Styles.Home_Products_BTN} onClick={() => AddToCart(el)}> Add to cart</button>
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

            {pageItems > 1 &&<div className={Styles.Shop_Towars_pagitanion}>
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
            </div>}
        </section>
    )
}

export default ItemsContainer