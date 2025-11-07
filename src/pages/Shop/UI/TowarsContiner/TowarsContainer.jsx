
import Styles from './TowarsContainerStyle.module.scss'

import Toolbar from '../../../../components/Toolbar/Toolbar'
import ItemsContainer from '../../../../components/ItemsContainer/ItemsContainer'

const TowarsContainer = () =>{

    return(
        <section className={Styles.Shop_Towars_Container}>
            <Toolbar/>
            <ItemsContainer />
        </section>
    )
}

export default TowarsContainer
