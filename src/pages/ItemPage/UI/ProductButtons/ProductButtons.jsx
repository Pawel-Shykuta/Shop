
import { useEffect, useState } from 'react';

import Styles from './ProductButtonsStyles.module.scss'
import Button from '../../../../components/UI/Button/Button'

import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useGlobal } from '../../../../utils/GlobalContext';


const ProductButtons = ({item}) =>{
    const {setCartItems, likedProducts, setLikedProducts} = useGlobal()
    const [isLiked, setIsLiked] = useState(likedProducts.some(el => el.id === item.id))


    const AddToCart = (item) =>{
        setCartItems(prev => {
            const exist = prev.find(el => el.id === item.id)
            if(exist){
                return prev.map(el => el.id === item.id ? {...el,  quantity: el.quantity + 1} : el)
            }

            return[...prev, {...item, quantity:1}]
        })
    }

    const Licked = (item) =>{
        const exist = likedProducts.find(el => el.id === item.id)

        if(exist){
            setLikedProducts(prev => prev.filter(el => el.id !== item.id))
            setIsLiked(false)
        }else{
            setLikedProducts(prev => [...prev, item])
            setIsLiked(true)
        }
    }

    return(
        <section className={Styles.Product_Buttons_Wrapper}>               
            <Button text={ 
                <>  
                    {!isLiked ? <IoHeartOutline fontSize={22}/> : <IoHeartSharp fontSize={22}/>}
                    Wishlist 
                </>}
                onClick={() => Licked(item)}
            />

            <Button text='Add to Cart' onClick={() => AddToCart(item)}/>
        </section>
    )
}

export default ProductButtons

