
import { useEffect, useState } from 'react'
import Button from '../../../../components/UI/Button/Button'
import { useGlobal } from '../../../../utils/GlobalContext'

import Styles from './CartPageItemsStyle.module.scss'

import CartPageItemsMap from '../CartPageItemsMap/CartPageItemsMap'
import CartPageItemsRadioButtons from '../CartPageItemsRadioButtons/CartPageItemsRadioButtons'
import Input from '../../../../components/UI/Input/Input'
import { LuTicketPercent } from "react-icons/lu";



const CartPageItems = ({setActive, setUserChoosing, promoIsAktive, setPromoIsAktive}) =>{

    const {cartItems} = useGlobal()
    const [selectedShipping, setSelectedShipping] = useState("free");
    const [promodoce, setPromocode] = useState('')

    const {CorrectPromocode} = useGlobal()    


    const sumTotal = cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0)
    const shippingCost = selectedShipping === 'express' ? 15 : selectedShipping === 'pickUp' ? sumTotal * 0.21 : 0
    const [total, setTotal] = useState(Math.ceil(sumTotal + shippingCost))



    const CheckPromocode = () => {
        if (promodoce.toLowerCase() === CorrectPromocode.toLowerCase()) {
            if (promoIsAktive) {
                alert('Promocode already activated');
                return;
            }

            setPromoIsAktive(true);
            sessionStorage.setItem('promoIsAktive', 'true')
        } else {
            alert('Promocode not correct');
        }

        setPromocode('');
    };


    useEffect(() => {
        let newTotal = Math.ceil(sumTotal + shippingCost);

        if (promoIsAktive) {
            newTotal = Math.ceil(newTotal * 0.85); // применяем скидку один раз
        }
        setTotal(newTotal);
        
        setUserChoosing({  
            sumTotal: sumTotal,
            total: newTotal,
            hipping: selectedShipping,
            promodoce:promoIsAktive,
        })

    }, [sumTotal, shippingCost, promoIsAktive]);

    useEffect(() =>{
        setPromoIsAktive(sessionStorage.getItem('promoIsAktive'))
    },[])




    return(
        <section className={Styles.Cart_Page_Items_Container}>
            
            <div className={Styles.Cart_Page_Items}>
                <div className={Styles.Cart_Page_Items_Header}>
                    <h3>Products</h3>
                    <div>
                        <h2>Quantity</h2>
                        <h2>Price</h2>
                        <h2>Subtotal</h2>
                    </div>
                </div>

                <CartPageItemsMap />
            </div>

           <div className={Styles.Cupon_Container}>
                <h1>Have a coupon?</h1>
                <p>Add your code for an instant cart discount</p>
                
                <div className={Styles.Cuppon_Input_Container}>
                    <LuTicketPercent fontSize={24}/>
                    <Input placeholder='Coupon Code' className={Styles.Input} value={promodoce} onChange={(e) => setPromocode(e.target.value)} />
                    <h1 onClick={CheckPromocode}>Apply</h1>
                </div>
           </div>
        
            <div className={Styles.CartPage_Items_Cart_Summary}>
                <h1>Cart summary</h1>

                <div className={Styles.CartPageItems_Summary_Container}>

                    <CartPageItemsRadioButtons selectedShipping={selectedShipping} setSelectedShipping={setSelectedShipping}/>
                    
                    <div className={Styles.CartPageItems_SubTotal}>
                        <h1>Subtotal</h1>
                        <h2>${sumTotal}.00</h2>
                    </div>

                    <div className={Styles.CartPageItems_Price_Total}>
                        <h1>Total</h1>
                        <h2>${total}.00</h2>
                    </div>
                </div>
                
                <Button text='Checkout' className={Styles.CartPageItems_CheckOut_BTN} onClick={() => setActive(prev => prev + 1)}/>
            </div>
        </section>
    )
}

export default CartPageItems