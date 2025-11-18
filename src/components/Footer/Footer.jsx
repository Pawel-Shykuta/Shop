
import Styles from './FooterStyle.module.scss'
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () =>{
    const navigate = useNavigate()

    const newChangeLocation = (name) =>{
        navigate(name)
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return(
        <footer className={Styles.Footer_Wrapper}>
            <section className={Styles.Footer_Content}>
                <div className={Styles['Footer_Logo-And-slogan']}>
                    <h1 onClick={() => newChangeLocation('/')}>3legant <span>.</span></h1> 
                    <span className={Styles.Footer_Palka}></span>
                    <h3>Gift & Decoration Store</h3>
                </div>
                    
                <nav className={Styles.Footer_Navigation}>
                    <li onClick={() => newChangeLocation('/')}>Home</li>
                    <li onClick={() => newChangeLocation('/Shop')}>Shop</li>
                    <li onClick={() => newChangeLocation('Products')}>Products</li>
                    <li>Blog</li>
                    <li onClick={() => newChangeLocation('ContactUs')}>Contact Us</li>
                </nav>
            </section>

            <section className={Styles.Footer_Bottom_Bar}>
                <div className={Styles.Footer_Bottom_copyright}>
                    <h2>Copyright © 2023 3legant. All rights reserved</h2>
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Use</h3>
                </div>

                <div className={Styles.Footer_Bottom_SocialMedia}>
                    <CiInstagram className={Styles.Footer_Bottom_Social_Item}/>
                    <FiFacebook className={Styles.Footer_Bottom_Social_Item}/>
                    <FaYoutube className={Styles.Footer_Bottom_Social_Item}/>
                </div> 
            </section>
        </footer>
    )
}

export default Footer
