
import { useGlobal } from '../../../../utils/GlobalContext'
import Styles from './CartPageItemsMapStyles.module.scss'


const CartPageItemsMap = () =>{

    const {cartItems, setCartItems} = useGlobal()

    const changeCount = (num, id) =>{
        setCartItems(prev =>{
            return prev.map(el => {
                return el.id === id ? {...el, quantity: el.quantity + num} : el
            }).filter(el => el.quantity > 0)
        })
    } 

    return(
       <div className={Styles.Cart_Elements}>        
            {cartItems.map((el, index) => (

                <div key={index} className={Styles.Cart_Item}>

                    <div className={Styles.Cart_Towars_Info}>
                        <img src={el.img} alt="" />
       
                            <div>
                                <h1>{el.name}</h1>
                                <h2>Color: Balck</h2>
                                   
                                <div className={Styles.Cart_Item_Counter}> 
                                    <span onClick={() => changeCount(-1, el.id)}>-</span>  
                                        {el.quantity} 
                                    <span onClick={() => changeCount(1, el.id)}>+</span> 
                                </div>

                                <div 
                                    className={Styles.Cart_Item_Closed_Button} 
                                    onClick={() => setCartItems(prev => prev.filter(item => item.id !== el.id))}
                                    >                                             
       
                                    <h2>
                                        remove
                                    </h2>                                            
                                </div>
                            </div>
                    </div>
       
                    <div className={Styles.Cart_Item_Info_Container}>
              
       
                         <div className={Styles.Cart_Item_Counter}> 
                            <span onClick={() => changeCount(-1, el.id)}>-</span>  
                                {el.quantity} 
                            <span onClick={() => changeCount(1, el.id)}>+</span> 
                        </div>
       
                        <div className={Styles.Cart_Item_price}>
                            ${el.price }
                        </div>
                                       
                        <div className={Styles.Cart_Item_Full_price}>
                            ${el.price * el.quantity}
                        </div>

                        <div className={Styles.Cart_Item_Remove}>

                        </div>
                    </div>       
                                                       
                </div>
            ))}
        </div>
    )
}

export default CartPageItemsMap

