
import Comments from '../Comments/Comments'
import ProductLoopTimer from '../Product LoopTimer/ProductLoopTimer'
import ProductButtons from '../ProductButtons/ProductButtons'
import Styles from './PageLoyautStyle.module.scss'

const PageLoyaut = ({item}) => {

    return(
        <div className={Styles.Item_Page_Loyaut_Container}>
            <div className={Styles.Item_Page_Loyaut}>
                <img src={item.img} alt="" />

                <div className={Styles.Item_Page_Loyaut_Info_Wrapper}>
                    
                    <div className={Styles.Item_Page_Loyaut_Info}>
                        <div className={Styles.Item_Page_Loyaut_Info_Starts}>
                            {Array(item.stars).fill(0).map((_, index) =>(
                                <span key={index}>★</span>
                            ))}
                        </div>

                        <h1>{item.name}</h1>
                        <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>                                   
                        <h3>${item.price} {item.oldPrice && <span>${item.oldPrice}</span>} </h3> 
                
                    </div>
                
                    <ProductLoopTimer/>
                    <ProductButtons item={item}/>
                </div>
            </div>

            
            <Comments item={item}/>
        </div>
    )
}

export default PageLoyaut