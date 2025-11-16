
import { useEffect, useState } from 'react';
import styles from './HeaderStyle.module.scss'

import { FaOpencart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useGlobal } from '../../utils/GlobalContext';

const Header = ({setCartOPen}) =>{
    const navigate = useNavigate()
    const isMobile = window.innerWidth <= 450

    const [text, setText] = useState('')
    const [isOpen, setIsOpen] = useState(true)
    const [searcOpen, setSearchOpen] = useState(false)

    const {cartItems} = useGlobal()

    const OpenAsideMenu = () =>{
        setIsOpen(!isOpen)
    }

    const changePage = (nav) =>{
        navigate(nav)
        setIsOpen(true)
        window.scrollTo({top:0, behavior:'smooth'})
    }

    const Search = () =>{
        setText('')
    }
    
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    return () => (document.body.style.overflow = 'auto');
    }, [isOpen]);


    return(
        <header className={styles.Header_Wrapper}>

            <div className={styles.Header_LogoContainer}>
                <span className={styles.Heade_BurgerMenu} onClick={OpenAsideMenu}></span>
                <h1 className={styles.Header_logo}>3legant.</h1>
            </div>

                   
            <ul className={styles['Header_Navigtion-Container']} style={{left: isOpen ? '-100%' : '0'}} >
                {isMobile &&             
                    <div className={styles['Header_LogoContainer-menu']}>
                        <h1 className={styles.Header_logo}>3legant.</h1>
                        <span className={styles['Heade_BurgerMenu-active']} onClick={OpenAsideMenu}></span>
                    </div> 
                }

                {isMobile && 
                    <div className={styles.header_Input}> 
                        <Button className={styles.Header_SearchBTN} onClick={Search}/>
                        <Input placeholder='Search' value={text} className={styles.Header_SearchInput} onChange={(e) => setText(e.target.value)}/>
                    </div>
                }
                
                <li onClick={() => changePage('/')}>Home</li>
                <li onClick={() => changePage('/Shop')}>Shop</li>
                <li>Product</li>
                <li>Contact Us</li>
            </ul>

            <div className={styles['Header_Others-Navigation']}>
                {!isMobile && 
                    <div 
                        className={`${styles.header_Input} ${searcOpen ? styles.active : ''}`}
                    > 
                    <Button className={styles.Header_SearchBTN} onClick={() => setSearchOpen(!searcOpen)}/>
                    <Input 
                        placeholder='Search' 
                        value={text}                     
                        className={styles.Header_SearchInput} 
                        onChange={(e) => setText(e.target.value)}
                    />
                    </div>
                }
                <div className={styles['Header_User-Accaunt']} onClick={() => navigate('/singIn')}>
                    <span className={styles.Header_Head}></span>
                    <span className={styles.Header_Body}></span>
                </div>
                <div className={styles.Header_Cart_Wrapper} onClick={() => setCartOPen(prev => !prev)}>
                    <FaOpencart className={styles.Header_Cart}/>
                    {cartItems.length > 0 && <span>{cartItems.length}</span>}
                </div>
            </div>
        </header>
    )
}


export default Header