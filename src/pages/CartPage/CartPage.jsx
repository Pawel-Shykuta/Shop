
import { useState } from 'react'
import Styles from './CartPageStyle.module.scss'
import CartPageSteps from './UI/CartPageSteps/CartPageSteps'
import CartPageItems from './UI/CartPageItems/CartPageItems'


const CartPage = () =>{

    const [active, setActive] = useState(1)

    return(
        <section className={Styles.CartPage_Wrapper}>
            <CartPageSteps active = {active}/>
            <CartPageItems setActive={setActive}/>
        </section>
    )
}

export default CartPage