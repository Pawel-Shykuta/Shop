

import Styles from './ContactUsStyle.module.scss'

import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

import { CiShop } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Values from '../Home/UI/Values/Values';

const ContactUs = () =>{

    return(
        <section className={Styles.ContactUs_Wrapper}>
            <div className={Styles.ContactUs_Header_Info}>
                <h1>We believe in sustainable decor. We’re passionate about life at home.</h1>
                <p> Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present </p>
            </div>
            
            <div className={Styles.ContactUs_Feature_Section}>
                <img src="https://i.postimg.cc/B6hw8snv/9f9efb2e4439d804a7b6bed916b72b3bda48939a.jpg" alt="" />

                <div className={Styles.ContactUs_Feature_Info}>
                    <h1>About Us</h1>
                    <p>
                        3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        Our customer service is always prepared to support you 24/7
                    </p>

                </div>
            </div>

            <div className={Styles.Contact_Us_Section}>
                <h1>Contact Us</h1>
                
                <div className={Styles.Contact_Us_Item_Block_Container}>
                    <div className={Styles.Contact_Us_Item_Block}>
                        <CiShop/>
                            <h3>Address</h3>
                            <h2>
                                234 Hai Trieu, Ho Chi Minh City,  Viet Nam
                            </h2>
                    </div>

                    <div className={Styles.Contact_Us_Item_Block}>
                        <FiPhone />
                            <h3>Contact Us</h3>
                            <h2>
                                +84 234 567 890

                            </h2>
                    </div>

                    <div className={Styles.Contact_Us_Item_Block}>
                        <MdOutlineEmail />
                            <h3>Email</h3>
                            <h2>
                                hello@3legant.com
                            </h2>
                    </div>
                </div>
                
                <div className={Styles.Contact_Us_Location_Container}>
                    <div className={Styles.Contact_Us_Form}>
                        <Input 
                            label='Full Name'
                            type='text'
                            placeholder='Your Name'
                            className={Styles.ContactUs_Inputs}
                        />
                        <Input 
                            label='Email address'
                            type='email'
                            placeholder='Your Email'
                            className={Styles.ContactUs_Inputs}
                        />
                        <textarea placeholder='Your message'>                      
                        </textarea>

                        <Button text='Send Message' className={Styles.ContactUs_BTN}/>
                    </div>

                    <div className={Styles.Contact_Us_Cart}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230194.8597278081!2d30.412197796671236!3d50.397912580004125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sch!4v1763553854125!5m2!1sru!2sch"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={Styles.Contact_Us_Cart_Map}
                        />

                    </div>
                </div>

            </div>

            <div className={Styles.Contact_Us_Values_Section}>
               <Values/>
            </div>
        </section>
    )
}

export default ContactUs
