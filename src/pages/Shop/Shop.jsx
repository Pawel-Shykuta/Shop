import Styles from './ShopStyle.module.scss'

import ShopPageHeader from './UI/PageHeader/ShopPageHeader'
import TowarsContainer from './UI/TowarsContiner/TowarsContainer' 

const Shop = ({setCatItem}) =>{

    return(
        <section className={Styles.Shop_Wrapper}>
            <ShopPageHeader/>
                <div className={Styles.Shop_Products}>
                    <TowarsContainer setCatItem={setCatItem}/>
                </div>
        </section>
    )
}

export default Shop
