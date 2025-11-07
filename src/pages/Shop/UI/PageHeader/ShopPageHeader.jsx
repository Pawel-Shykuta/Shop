import Styles from './ShopPageHeaderStyle.module.scss'
import { useNavigate } from 'react-router-dom'

const ShopPageHeader = () =>{
    const navigate = useNavigate()

    return(
        <div className={Styles.Shop_Page_Header}>
            <div>
                <span onClick={() =>navigate('/')}>Home ></span> <span> Shop</span>
            </div>            
            <h1>Shop Page</h1>
            <p>Let’s design the place you always imagined.</p>        
        </div>
    )
}

export default ShopPageHeader