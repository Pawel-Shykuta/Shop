import Styles from './HomeSliderSectionStyle.module.scss'


const HomeSliderSection = () =>{

    return(
            <div className={Styles['Home_Slider-section']}>
                <img src="https://i.postimg.cc/tCzLbRnV/7dcefc240db6128ab1993d65eae0e96498fbd94e.jpg" alt="SliderFoto" />
                        
                <div className={Styles['Home_Slide-Info']}>
                    <h1>Simply Unique <span>/</span><br/>
                        Simply Better <span>.</span></h1> 
                    <p><span>3legant</span> is a gift & decorations store based in HCMC, 
                        Vietnam. Est since 2019. </p>
                </div>
            </div>
    )
}

export default HomeSliderSection