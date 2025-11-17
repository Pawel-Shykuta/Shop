
import { useState } from 'react';

import Styles from './ProductButtonsStyles.module.scss'
import Button from '../../../../components/UI/Button/Button'

import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useGlobal } from '../../../../utils/GlobalContext';


const ProductButtons = ({item}) =>{
   
    const [isLiked, setIsLiked] = useState(false)

    const {setCartItems} = useGlobal()

    const AddToCart = (item) =>{
        setCartItems(prev => {
            const exist = prev.find(el => el.id === item.id)
            if(exist){
                return prev.map(el => el.id === item.id ? {...el,  quantity: el.quantity + 1} : el)
            }

            return[...prev, {...item, quantity:1}]
        })
    }


    return(
        <section className={Styles.Product_Buttons_Wrapper}>               
            <Button text={ 
                <>  
                    {!isLiked ? <IoHeartOutline fontSize={22}/> : <IoHeartSharp fontSize={22}/>}
                    Wishlist 
                </>}
                onClick={() => setIsLiked(prev => !prev)}
            />

            <Button text='Add to Cart' onClick={() => AddToCart(item)}/>
        </section>
    )
}

export default ProductButtons

