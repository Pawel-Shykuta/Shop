

import Styles from './ContactUsStyle.module.scss'


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
        </section>
    )
}

export default ContactUs
