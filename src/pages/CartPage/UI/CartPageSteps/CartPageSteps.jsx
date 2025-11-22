
import Styles from './CartPageStepsStyles.module.scss'

const CartPageSteps = ({active}) =>{

    return(
             <div className={Styles.CartPage_Steps_Container}>
                <h1>{active === 1 ? 'Cart' : active === 2 ? 'Check Out' : 'Complete!'}</h1>

                <div className={Styles.CartPage_Steps} style={{left: active === 2 ? '-60%' : active === 3 ? '-120%' : '0'}}>
                    <h2  className={active === 1 ? Styles.Active : active > 1 ? Styles.Compleated: null }> <span>{active > 1 ? '✓' : 1}</span> Shopping cart </h2>
                    <h2  className={active === 2 ? Styles.Active : active > 2 ? Styles.Compleated: null} > <span>{active > 2 ? '✓' : 2}</span> Checkout details </h2>
                    <h2  className={active === 3 ? Styles.Active : active > 3 ? Styles.Compleated: null} > <span>{active > 3 ? '✓' : 3}</span> Order complete </h2>
                </div>
            </div>
    )
}

export default CartPageSteps
