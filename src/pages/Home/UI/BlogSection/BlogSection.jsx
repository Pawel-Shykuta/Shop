import HomeBannerStrell from '../../../../components/UI/HomeBannerStrell/HomeBannerStrell'
import Styles from './BlogSectionStyles.module.scss'


const BlogSection = () =>{

    return(
        <section className={Styles.Home_BlogSection}>
            <div className={Styles.Home_BlogNavigation}>
                <h1>Articles</h1> <HomeBannerStrell text='More Articles'/>
            </div>

            <div className={Styles.Home_Blog_Fotos_Container}>
                <div className={Styles.Home_Foto_Element}>
                    <img src="https://i.postimg.cc/cHpyMSqx/82f83dfd5a12911fed9d5a4917e973ec9a95c79f.jpg" alt="" />
                    
                    <div className={Styles.Home_Foto_Text}>
                        <h1>7 ways to decor your home</h1>
                        <HomeBannerStrell text='More Articles'/>
                    </div>
                </div>

                <div className={Styles.Home_Foto_Element}>
                    <img src="https://i.postimg.cc/GmL0jKfx/c90986d85815d30f3716d751834b3f20ab1715cf.jpg" alt="" />
                    
                    <div className={Styles.Home_Foto_Text}>
                        <h1>Kitchen organization</h1>
                        <HomeBannerStrell text='More Articles'/>
                    </div>
                </div>

                <div className={Styles.Home_Foto_Element}>
                    <img src="https://i.postimg.cc/3R5Q2h5s/e685039df52033b8a13f6f9fb9b88103145e077e.jpg" alt="" />
                    
                    <div className={Styles.Home_Foto_Text}>
                        <h1>Decor your bedroom</h1>
                        <HomeBannerStrell text='More Articles'/>    
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogSection

