

import Styles from './CartMapStyle.module.scss'
import { useGlobal } from '../../../../../utils/GlobalContext'
import emitter from '../../../../../utils/eventBus'


const CartMap = () =>{

    const {cartItems} = useGlobal()

    return(
        <div className={Styles.Cart_Container}>
            {cartItems.map(el =>(
                <div key={el.id} className={Styles.Cart_Page_Item}>
                    <img src={el.img} alt="" />

                    <div className={Styles.Info_Block}>
                        <h1>{el.name}</h1>
                        <h2>Color: black</h2>

                        <div> <span onClick={() => emitter.emit('cart:minus', el.id)}>-</span>{el.quantity} <span onClick={() => emitter.emit('cart:plus', el.id)}>+</span> </div>
                    </div>

                    <h2>${el.price * el.quantity}.00</h2>
                </div>
            ))}
        </div>
    )
}

export default CartMap