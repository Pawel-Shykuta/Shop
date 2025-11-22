

import { useEffect, useState } from 'react'
import Styles from './CheckOutInfoStyles.module.scss'


const CheckOutInfo = ({userChoosing}) =>{

    const [discount, setDiscount] = useState(0)

       useEffect(() => {
            if (userChoosing.promodoce) {
                const original = userChoosing.sumTotal +  (userChoosing.selectedShipping === 'express'? 15: userChoosing.selectedShipping === 'pickUp'? userChoosing.sumTotal * 0.21 : 0);

                const newDiscount = Math.ceil(original * 0.15);
                setDiscount(newDiscount);
            } else {
                setDiscount(0);
            }
        }, [userChoosing]);

    

    return(
            <div className={Styles.CheckOut_Info}>
                <div className={Styles.CheckOu_tInfo_Element}>  
                    <h3>JenkateMW</h3>
                    <h2 className={discount > 0 ? Styles.discount_Is_Active : undefined}>-$ {discount}.00</h2>
                </div>

                <div className={Styles.CheckOu_tInfo_Element}> 
                    <h3>Shipping</h3>
                    <h2>{userChoosing.hipping}</h2>
                </div>

                <div className={Styles.CheckOu_tInfo_Element}> 
                    <h3>Subtotal</h3>
                    <h2>${userChoosing.sumTotal}.00</h2>
                </div>

                <div className={Styles.CheckOu_tInfo_Element}> 
                    <h3>Total</h3>
                    <h2>${userChoosing.total}.00</h2>
                </div>
            </div>
    )
}

export default CheckOutInfo

