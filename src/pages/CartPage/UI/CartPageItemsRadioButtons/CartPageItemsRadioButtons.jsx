
import Styles from './CartPageItemsRadioButtonsStyle.module.scss'


const CartPageItemsRadioButtons = ({selectedShipping, setSelectedShipping}) =>{

    return(
                    <div className={Styles.CartPageItems_Radio_Buttons_Container}>
                        
                        <div className={Styles.CartPageItems_Radio_Item} onClick={() => setSelectedShipping("free")}>
                            <div>
                                 <input
                                    type="radio"
                                    name="shipping"
                                    value="free"
                                    checked={selectedShipping === "free"}
                                    onChange={e => setSelectedShipping(e.target.value)}
                                />
                                <h2>Free shipping </h2>
                            </div>
                            <h3>$0.00</h3>
                        </div>

                        <div className={Styles.CartPageItems_Radio_Item} onClick={() => setSelectedShipping('express')}>
                            <div>
                                <input 
                                    type="radio" 
                                    name="shipping" 
                                    value='express'
                                    checked={selectedShipping === 'express'}
                                    onChange={(e) => setSelectedShipping(e.target.value)}
                                /> 
                                <h2>Express shipping </h2>
                            </div>
                            <h3>+ $15.00</h3>
                        </div>

                        <div className={Styles.CartPageItems_Radio_Item} onClick={() => setSelectedShipping("pickUp")} >
                            <div>
                                <input 
                                    type="radio" 
                                    name="shipping"
                                    value='pickUp'
                                    checked={selectedShipping === 'pickUp'}
                                    onChange={(e) => setSelectedShipping(e.target.value)}
                                /> 
                                <h2>Pick Up </h2>
                            </div>

                            <h3>% 21.00</h3>
                        </div>

                    </div>
    )
}

export default CartPageItemsRadioButtons
