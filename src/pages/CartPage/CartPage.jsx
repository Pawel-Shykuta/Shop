
import { useState } from 'react'
import Styles from './CartPageStyle.module.scss'
import CartPageSteps from './UI/CartPageSteps/CartPageSteps'
import CartPageItems from './UI/CartPageItems/CartPageItems'
import CartPageItemsSecondStep from './SecondStep/CartPageItemsSecondStep'



const CartPage = () =>{

    const [active, setActive] = useState(1)
    const [userChoosing, setUserChoosing] = useState({})

    const [promoIsAktive, setPromoIsAktive] = useState(false)


    return(
        <section className={Styles.CartPage_Wrapper}>
            <CartPageSteps active = {active}/>
            {active === 1 ? 
                <CartPageItems 
                    setActive={setActive} 
                    setUserChoosing={setUserChoosing} 
                    promoIsAktive={promoIsAktive} 
                    setPromoIsAktive={setPromoIsAktive} 
                /> : active === 2 ? 

                <CartPageItemsSecondStep 
                    setActive={setActive} 
                    userChoosing={userChoosing} 
                    setUserChoosing={setUserChoosing}
                    setPromoIsAktive={setPromoIsAktive} 
                /> : ''
            }
            
        </section>
    )
}

export default CartPage