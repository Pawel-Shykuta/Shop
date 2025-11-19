
import { useParams } from 'react-router-dom'
import { useGlobal } from '../../utils/GlobalContext'
import Styles from './ItemPageStyle.module.scss'
import PageLoyaut from './UI/PageLoyaut/PageLoyaut'

const ItemPage = () => {
    const {id} = useParams()
    const {data} = useGlobal()

    const item = data.find(el => el.id === Number(id))

    
    return(
        <section className={Styles.Item_Page_Wrapper}>
            <PageLoyaut item={item}/>
        </section>
    )
}

export default ItemPage