
import Styles from './CartStyle.module.scss'
import Button from '../UI/Button/Button'
import { useGlobal } from '../../utils/GlobalContext'


const Cart = ({setCartOPen}) =>{

    const {cartItems, setCartItems} = useGlobal()

    
    const changeCount = (num, id) =>{
        setCartItems(prev =>{
            return prev.map(el => {
                return el.id === id ? {...el, quantity: el.quantity + num} : el
            }).filter(el => el.quantity > 0)
        })
    } 

    return(
        <section className={Styles.Cart_Wrapper} onClick={() => setCartOPen(false)}>

            <div className={Styles.Cart_Container} onClick={(e) => e.stopPropagation()}>                
                <div className={Styles.Cart_Items_Container}>

                    <div className={Styles.Cart_Items_Close}>
                        <h1>Cart</h1>

                        <span onClick={() => {setCartOPen(false)}}></span>
                    </div>

                    {cartItems.map((el, index) => (
                        <div key={index} className={Styles.Cart_Item}>
                            <img src={el.img} alt="" />
                            <div className={Styles.Cart_Item_Info_Container}>

                                <div className={Styles.Cart_Item_Info}>
                                    <h1>{el.name}</h1>
                                    <h2>Balck</h2>
                                    <div> 
                                        <span onClick={() => changeCount(-1, el.id)}>-</span>  
                                        {el.quantity} 
                                        <span onClick={() => changeCount(1, el.id)}>+</span> 
                                    </div>
                                </div>

                                <div className={Styles.Cart_Item_price}>
                                    ${el.price * el.quantity}
                                    <div onClick={() => setCartItems(prev => prev.filter(item => item.id !== el.id))}></div>
                                </div>
                            </div>                           
                        </div>
                    ))}
                </div>

                <div className={Styles.Cart_Summary_Container}>

                    <div className={Styles.Cart_Price_Container}>
                        <h2>Total</h2>
                        <h3>${cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0)}</h3>
                    </div>
                    
                    <div className={Styles.Cart_Button_Container}>
                        <Button text='Checkout' className={Styles.Cart_BTN}/>
                        <p>View Cart</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart 