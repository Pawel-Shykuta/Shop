
import { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import Styles from './CartPageItemsSecondStepStyles.module.scss'
import InputForms from './UI/InputForms/InputForms'
import CartMap from './UI/CartMap/CartMap'
import CheckOutInfo from './UI/CheckOutInfo/CheckOutInfo'
import { useGlobal } from '../../../utils/GlobalContext'


const CartPageItemsSecondStep = ({setActive, userChoosing,setPromoIsAktive, setUserChoosing}) =>{


    const [formsData, setFormsData] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',

        address:'',
        country:'',
        city:'',
        state:'',
        zipCode:'',

        payBy:'',
        cartNumber:'',
        expirationdate:'',
        CVC:'',
    })

    const SendData = () =>{      
        const error = Object.values(formsData).some(el => el.trim() === '')

        if(error){
            alert('Заполните все поля!');
            return
        }

        setFormsData({
            firstName:'',
            lastName:'',
            phone:'',
            email:'',

            address:'',
            country:'',
            city:'',
            state:'',
            zipCode:'',

            payBy:'',
            cartNumber:'',
            expirationdate:'',
            CVC:'', 
        })
        setActive(prev => prev + 1)
    }

    const [proomValuse, setRpomoValue] = useState('')
    const {CorrectPromocode} = useGlobal()

    const addPromo = () => {
        if(userChoosing.promodoce){
            alert('Promodoce is actived!')
            setRpomoValue('')
            return
        }

        if(proomValuse === CorrectPromocode){
            setPromoIsAktive(true)
            alert('Promocode is actived!')
            setUserChoosing(prev => ({
                ...prev,
                total: Math.ceil(prev.total * 0.85),
                promodoce: true
            }));
        }else{
           alert('Not correct promocode!') 
        }

        setRpomoValue('')
    }
  
    return(
        <section className={Styles.Cart_Page_Second_Step_Wrapper}>

            <InputForms  formsData={formsData} setFormsData={setFormsData}/>

            <div>
                 <div className={Styles.Cart_Page_Second_Cart}>
                    <h1>Order summary</h1>

                    <CartMap />

                    <div className={Styles.discount_Container}>
                        <Input placeholder='Input' className={Styles.Discount_Input} value={proomValuse} onChange={(e) => setRpomoValue(e.target.value)}/>
                        <Button text='Apply' onClick={addPromo}/>
                    </div>                   
                    <CheckOutInfo userChoosing={userChoosing} />
                </div>
            </div>        

        </section>
    )
}

export default  CartPageItemsSecondStep

