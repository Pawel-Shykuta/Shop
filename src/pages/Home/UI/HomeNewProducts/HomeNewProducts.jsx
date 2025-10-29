import HomeBannerStrell from '../../../../components/UI/HomeBannerStrell/HomeBannerStrell'
import Styles from './HomeNewProductsStyles.module.scss'

const HomeNewProducts = ({arr}) => {

    return (
            <div className={Styles.Home_NewProducts}>
                <div className={Styles['Home_Products-Text']}>
                    <h1>New Arrivals</h1>
                    <HomeBannerStrell className={Styles.Home_MoreProd} text='More Products'/>
                </div>

                <div className={Styles['Home_Products-Elements']}>
                    {arr.map((el, index) =>(
                        <div key={index} className={Styles.Home_Products_Elements}>   
                            <div 
                                className={Styles.Home_Elements_Foto} 
                                style={{ backgroundImage: `url(${el.img})` }}
                            >
                                <div className={Styles.Home_Fotos_Status}>
                                    <div className={Styles.Home_Element_Status}>{el.status}</div>
                                    <div className={Styles.Home_Element_Discount}>{el.discount}</div>
                                </div>
                                
                       
                            </div>

                            <div className={Styles.Home_Elements_Info}>
                                <div className={Styles.Home_Products_Starts}>
                                    {Array(el.stars).fill(0).map((_, index) => (
                                        <span key={index}>★</span>
                                    ))
                                    }
                                </div>

                                <h3>{el.name}</h3>
                                <h4>${el.price}</h4>

                                <button className={Styles.Home_Products_BTN}>Add to cart</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
    )
}

export default HomeNewProducts