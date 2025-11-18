

import { useState } from 'react';
import Button from '../../../../components/UI/Button/Button'
import Input from '../../../../components/UI/Input/Input'
import Styles from './CommentsStyle.module.scss' 

import { IoMdArrowForward } from "react-icons/io";

const Comments = ({item}) =>{

    const[comment, setComment] = useState('')

    const isPhone = window.innerWidth < 450 

    const SendComment = () =>{
        if(comment.trim() === '') return

        setComment('')
    }

    return(
        <section className={Styles.Comments_Wrapper}>

        <ul>
            <li>Additional Info</li>
            <li>Questions</li>
            <li>Reviews</li>
        </ul>

            <div className={Styles.Review_Section_Wrapper}>
                <div className={Styles.Review_Section_Info}>
                    <h1>Customer Reviews</h1>
                    <div className={Styles.Review_Section_Info_Stars}>
                        {Array(5).fill(0).map((_, index) =>(
                            <span key={index}>★</span>
                        ))}
                        <p>{item.comments.length} Reviews</p>
                    </div>
                </div>
                        
                <div className={Styles.Review_Section_Input}>
                        <Input className={Styles.Comments_Input} placeholder='Share your thoughts' value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <Button text={isPhone ? <IoMdArrowForward />:'Write Review'} onClick={SendComment}/>
                </div>
            </div>

            <div className={Styles.Comments_Container}>
                <h1>{item.comments.length}  Reviews</h1>
                    
                    {item.comments.map((el, index) =>(
                            <div key={index} className={Styles.Comments_Item}>                            
                                <div className={Styles.Comments_User}>
                                    <img src='https://i.postimg.cc/abcd1234/photo.jpg' alt="" />
                                        
                                        <div className={Styles.Comments_User_Info}>
                                            <h2>{el.user.name}</h2>
                                            <div>
                                                {Array(5).fill(0).map((_,index) =>(
                                                    <span key={index}>★</span>
                                                ))}
                                            </div> 
                                        </div>
                                                                       
                                </div>
                                
                                    <p>{el.text}</p>

                            </div>
                        ))}                
            </div>
            
        </section>
    )
}

export default Comments

