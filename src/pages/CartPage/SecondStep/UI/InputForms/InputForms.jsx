
import Button from '../../../../../components/UI/Button/Button'
import Input from '../../../../../components/UI/Input/Input'
import Styles from './InputFormsStyle.module.scss'



const InputForms = ({formsData, setFormsData}) =>{

   const ChangeValue = (e) =>{
        const {name, value} = e.target
        setFormsData(prev => ({...prev, [name]: value}))
    }

    return(
        <div className={Styles.Cart_Page_Second_Forms}>  
                 
                <div className={Styles.Contact_Infomation}>
                    <h1>Contact Infomation</h1>

                    <div className={Styles.Doubel_Input}>
                        <Input 
                            type='text' 
                            name='firstName' 
                            label='fIRST Name' 
                            placeholder='First name'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.firstName}
                            onChange={ChangeValue}
                            required 
                        />

                        <Input 
                            type='text' 
                            name='lastName' 
                            label='lAST Name' 
                            placeholder='Last name'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.lastName}
                            onChange={ChangeValue}
                            required 
                        />
                    </div>

                        <Input 
                            type='text' 
                            name='phone' 
                            label='Phone Number' 
                            placeholder='Phone number'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.phone}
                            onChange={ChangeValue}
                            required
                        />

                        <Input 
                            type='email' 
                            name='email' 
                            label='Email address' 
                            placeholder='Your Email'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.email}
                            onChange={ChangeValue}
                            required
                        />
                </div> 

                <div className={Styles.Contact_Infomation}>
                    <h1>Shipping Address</h1>

                        <Input 
                            type='text' 
                            name='address' 
                            label='Stress Address' 
                            placeholder='Stress Address'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.address}
                            onChange={(ChangeValue)}
                            required
                        />

                        <Input 
                            type='text' 
                            name='country' 
                            label='Country *' 
                            placeholder='Country'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.country}
                            onChange={ChangeValue}
                            required
                        />

                        <Input 
                            type='text' 
                            name='city' 
                            label='Town / City *' 
                            placeholder='Town / City'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.city}
                            onChange={ChangeValue}
                            required
                        />

                        <div className={Styles.Doubel_Input}>
                            <Input 
                                type='text' 
                                name='state' 
                                label='State' 
                                placeholder='State'
                                className={Styles.Cart_Page_Input_Container}
                                value={formsData.state}
                                onChange={ChangeValue}
                                required
                            />

                            <Input 
                                type='text' 
                                name='zipCode' 
                                label='Zip Code' 
                                placeholder='Zip Code'
                                className={Styles.Cart_Page_Input_Container}
                                value={formsData.zipCode}
                                onChange={ChangeValue}
                                required
                            />
                        </div>
                </div> 

                <div className={Styles.Contact_Infomation}>
                    <h1>Payment method</h1>

                        <div className={Styles.Payment_method_container}>
                            <div onClick={() => setFormsData(prev => ({...prev, payBy:'Card'}))}>   
                                <Input 
                                    type='radio' 
                                    name='payBy' 
                                    label='Pay by Card Credit'
                                    className={Styles.Cart_Page_Input_Container}
                                    value='Card'
                                    onChange={ChangeValue}
                                    checked={formsData.payBy === 'Card'}
                                /> 
                            </div>                   
                            <div onClick={() => setFormsData(prev => ({...prev, payBy:'PayPal'}))}>
                                <Input 
                                    type='radio' 
                                    name='payBy' 
                                    label='Paypal'
                                    className={Styles.Cart_Page_Input_Container}
                                    value='PayPal'
                                    onChange={ChangeValue}                                    
                                    checked={formsData.payBy === 'PayPal'}
                                /> 
                            </div>   
                         
                            
                        </div>
        
                        <Input 
                            type='text' 
                            name='cartNumber' 
                            label='Card Number' 
                            placeholder='1234 1234 1234'
                            className={Styles.Cart_Page_Input_Container}
                            value={formsData.cartNumber}
                            onChange={ChangeValue}
                            required
                        />

                        <div className={Styles.Doubel_Input}>
                            <Input 
                                type='text' 
                                name='expirationdate' 
                                label='Expiration date' 
                                placeholder='MM/YY'
                                className={Styles.Cart_Page_Input_Container}
                                value={formsData.expirationdate}
                                onChange={ChangeValue}
                                required
                            />

                            <Input 
                                type='text' 
                                name='CVC' 
                                label='CVC' 
                                placeholder='CVC code'
                                className={Styles.Cart_Page_Input_Container}
                                value={formsData.CVC}
                                onChange={ChangeValue}
                                required
                            />
                        </div>
                </div> 

                <Button text='Place Order' className={Styles.Cart_Page_Second_BTN}/>
            </div>
    )
}

export default InputForms

