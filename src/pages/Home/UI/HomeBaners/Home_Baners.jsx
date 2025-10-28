import Styles from './HomeBanersStyle.module.scss'

const HomeBaners = () =>{

    return(
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
    )
}

export default HomeBaners