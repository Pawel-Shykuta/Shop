
import { useParams } from 'react-router-dom'
import { useGlobal } from '../../utils/GlobalContext'
import Styles from './ItemPageStyle.module.scss'

const ItemPage = () => {
    const {id} = useParams()
    const {data} = useGlobal()

    const item = data.find(el => el.id === Number(id))

    console.log(item)

    return(
        <section className={Styles.Item_Page_Wrapper}>

            <div className={Styles.Item_Page_Loyaut_Container}>
                <img src={item.img} alt="" />

                <div className={Styles.Item_Page_Loyaut_Info}>
                    <div className={Styles.Item_Page_Loyaut_Info_Starts}>
                        {Array(item.stars).fill(0).map((_, index) =>(
                            <span key={index}>★</span>
                        ))}
                    </div>
                    <h1>{item.name}</h1>
                    <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                                      
                    <h3>${item.price} {item.oldPrice && <span>${item.oldPrice}</span>} </h3> 
                </div>
            </div>
        </section>
    )
}

export default ItemPage