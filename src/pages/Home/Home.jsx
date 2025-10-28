
import Styles from './HomeStyle.module.scss'


const Home = () =>{


    return(
        <section className={Styles.Home_Wrapper}>
            
            <div className={Styles['Home_Slider-section']}>
                <img src="https://i.postimg.cc/tCzLbRnV/7dcefc240db6128ab1993d65eae0e96498fbd94e.jpg" alt="SliderFoto" />
                
                <div className={Styles['Home_Slide-Info']}>
                    <h1>Simply Unique <span>/</span><br/>
                        Simply Better <span>.</span></h1> 
                    <p><span>3legant</span> is a gift & decorations store based in HCMC, 
                        Vietnam. Est since 2019. </p>
                </div>
            </div>

            <div className={Styles.Home_Baner}>
                <div className={Styles['Home_Baner_Big-Card']}>
                    <h2>Living Room</h2>
                    <h4>Shop Now 
                        <span className={Styles.Home_Banner_Strell}></span>
                    </h4>
                </div>

                <div className={Styles['Home_Baner_Small-Card']}>
                    <div className={`${Styles['Home_Baner_Small-Top']} ${Styles['Home_Baner-Small-element']}`}>
                        <h2>Bedroom</h2>
                        <h4>Shop Now 
                            <span className={Styles.Home_Banner_Strell}></span>
                        </h4>
                    </div>
                
                    <div className={`${Styles['Home_Baner_Small-Bottom']} ${Styles['Home_Baner-Small-element']}`}>
                        <h2>Kitchen</h2>
                        <h4>Shop Now 
                            <span className={Styles.Home_Banner_Strell}></span>
                        </h4>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home
