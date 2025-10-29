
import Styles from './HomeBannerStrellStyle.module.scss'

const HomeBannerStrell = ({text, className}) =>{

    return(
        <h4 className={className}>
            {text}
            <span className={Styles.Home_Banner_Strell}></span>
        </h4>
    )
}

export default HomeBannerStrell
