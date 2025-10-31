import Styles from './ImagePlaceholderStyles.module.scss'

import Input from '../../../../components/UI/Input/Input'

const ImagePlaceholder = ({email, setEmail}) =>{

    const imgOne = 'https://i.postimg.cc/Znp4vqMv/c898ffe2c0350fd22c758331418f9169ec926583-1.jpg'
    const  imgTwo = 'https://i.postimg.cc/QMYXRw7g/2c01ae8dce147d8554c2cda7530244569e9d8515-1.jpg'

    return(
        <section 
            className={Styles.Home_ImagePlaceholder_container} 
            style={{backgroundImage: ` url(${imgOne}), url(${imgTwo})`}} 
        >
            <div className={Styles.Home_ImagePlaceholder_Info}>
                <div className={Styles.Home_ImagePlaceholder_Info_Text}>
                    <h1>Join Our Newsletter</h1>
                    <h3>Sign up for deals, new products and promotions</h3>
                </div>

                <Input 
                    placeholder='Email address' 
                    label='Sing up' 
                    className={Styles.Home_ImagePlaceholder_Info_Input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                />
                
            </div>
        </section>
    )
}
export default ImagePlaceholder