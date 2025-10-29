
import Styles from './ValuesStyles.module.scss'

import { BsTelephone } from "react-icons/bs"; //Phone
import { TiLockClosedOutline } from "react-icons/ti"; //Locker
import { LiaMoneyBillSolid } from "react-icons/lia"; //Money
import { LiaShippingFastSolid } from "react-icons/lia";//Car

const Values = () =>{

    return(
        <section className={Styles.Home_Values_Wrapper}>
            <div className={Styles.Home_Values_Elements}>
                <LiaShippingFastSolid className={Styles.Home_values_Icon}/>
                <h1>Free Shipping</h1>
                <p>Order above $200</p>
            </div>

            <div className={Styles.Home_Values_Elements}>
                <LiaMoneyBillSolid className={Styles.Home_values_Icon}/>
                <h1>Money-back</h1>
                <p>30 days guarantee</p>
            </div>

            <div className={Styles.Home_Values_Elements}>
                <TiLockClosedOutline className={Styles.Home_values_Icon}/>
                <h1>Secure Payments</h1>
                <p>Secured by Stripe</p>
            </div>

            <div className={Styles.Home_Values_Elements}>
                <BsTelephone className={Styles.Home_values_Icon}/>
                <h1>24/7 Support</h1>
                <p>Phone and Email support</p>
            </div>
        </section>
    )
}

export default Values