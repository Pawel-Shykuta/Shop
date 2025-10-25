import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './SingUpStyle.module.scss';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';


const SingUp = () => {
  const navigate = useNavigate()

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
        userName: '',
        email: '',
        password: '',
    })
  }

  return (
    <section className={Styles.SingUp_Wrapper}>

      <div className={Styles.SingUp_Foto_Container}>
        <img src="https://i.postimg.cc/9fbzhc1K/2c01ae8dce147d8554c2cda7530244569e9d8515.jpg" alt="" />
      </div>

      <div className={Styles.SingUp_Menu}>
        <div className={Styles['SingUp_Form-Container']}>

            <div className={Styles['SingUp_Form-text']}>
                <h1>Sign Up</h1>
                <p>Already have an account? <span onClick={() => navigate('/')}>Sign in</span></p>
            </div>

            <div className={Styles['SingUp_Form']}>
                <Input 
                    type='text' 
                    value={userValue.name} 
                    name='name'
                    placeholder='Your name'
                    className={Styles.SingUp_Input}
                    onChange={inputValue}
                />

                <Input 
                    type='text' 
                    value={userValue.userName} 
                    name='userName'
                    placeholder='User name'
                    className={Styles.SingUp_Input}
                    onChange={inputValue}
                />   
                
                <Input 
                    type='email' 
                    value={userValue.email} 
                    name='email'
                    placeholder='Email address'
                    className={Styles.SingUp_Input}
                    onChange={inputValue}
                />

                <Input 
                    type='password' 
                    value={userValue.password} 
                    name='password'
                    placeholder='Password'
                    className={Styles.SingUp_Input}
                    onChange={inputValue}
                />

                <Button type='Button' text='Sing Up' className={Styles.SingUp_Button} onClick={SendInfo}/>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default SingUp;
