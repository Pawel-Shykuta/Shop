
import Styles from './CartPageStepsStyles.module.scss'

const CartPageSteps = ({active}) =>{

    return(
             <div className={Styles.CartPage_Steps_Container}>
                <h1>Cart</h1>

                <div className={Styles.CartPage_Steps} style={{left: active === 2 ? '-60%' : active === 3 ? '-120%' : '0'}}>
                    <h2  className={active === 1 ? Styles.Active : null}> <span>1</span> Shopping cart </h2>
                    <h2  className={active === 2 ? Styles.Active : null} > <span>2</span> Checkout details </h2>
                    <h2  className={active === 3 ? Styles.Active : null} > <span>3</span> Order complete </h2>
                </div>
            </div>
    )
}

export default CartPageSteps
