
import Styles from './LoyoutStyle.module.scss'

const Loyout = () =>{

    return(
        <section className={Styles.Home_Loyout_Container}>
            <img src="https://i.postimg.cc/MZdC4rHX/9f9efb2e4439d804a7b6bed916b72b3bda48939a.jpg" alt="" />
           
            <div className={Styles.Home_Loyout_Info}>
                <div className={Styles.Home_Loyout_Text}>
                    <h3>SALE UP TO 35% OFF</h3>
                    <h1>HUNDREDS of New lower prices!</h1>
                    <h2>It’s more affordable than ever to give every room in your home a stylish makeover</h2>
                </div>

                <p>Shop Now <span className={Styles.Home_Banner_Strell}></span></p>
            </div>
        </section>
    )
}

export default Loyout