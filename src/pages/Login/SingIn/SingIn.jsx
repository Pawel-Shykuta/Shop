import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Styles from './SingInStyle.module.scss'

import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";



const SingIn = () =>{
    const navigat = useNavigate()

   const [userValue, setUserValue] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
  });

  const inputValue = (e) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value
    });
  };

  const SendInfo = () =>{
    if(userValue.name.trim() !== '' || userValue.userName.trim() !== '' || userValue.email.trim() !== ''|| userValue.password.trim() !== '' )


    setUserValue({
        name: '',
        password: '',
    })
  }

  return (
    <section className={Styles.SingIn_Wrapper}>

      <div className={Styles.SingIn_Foto_Container}>
        <img src="https://i.postimg.cc/9fbzhc1K/2c01ae8dce147d8554c2cda7530244569e9d8515.jpg" alt="" />
      </div>

      <div className={Styles.SingIn_Menu}>
        <div className={Styles['SingIn_Form-Container']}>

            <div className={Styles['SingIn_Form-text']}>
                <h1>Sign In</h1>
                <p>Don’t have an accout yet? <span onClick={() => navigat('/SingUp')}>Sign Up</span></p>
            </div>

            <div className={Styles['SingIn_Form']}>
                <Input 
                    type='text' 
                    value={userValue.name} 
                    name='name'
                    placeholder='Your name'
                    className={Styles.SingIn_Input}
                    onChange={inputValue}
                />

                <Input 
                    type='text' 
                    value={userValue.password} 
                    name='password'
                    placeholder='password'
                    className={Styles.SingIn_Input}
                    onChange={inputValue}
                />             

                <Button type='Button' text='Sing Up' className={Styles.SingIn_Button} onClick={SendInfo}/>
            </div>
            
        </div>
      </div>
    </section>
  );
}   

export default SingIn