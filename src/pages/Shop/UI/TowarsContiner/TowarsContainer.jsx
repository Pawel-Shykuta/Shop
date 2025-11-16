
import Styles from './TowarsContainerStyle.module.scss'

import Toolbar from '../../../../components/Toolbar/Toolbar'
import ItemsContainer from '../../../../components/ItemsContainer/ItemsContainer'
import { useEffect,  useState } from 'react'

import { mergeSortAlphabetically, mergeSortAlphabeticallyReverse, QuickSort, QuickSortReverse} from '../../../../utils/sortUtils' 
import { useGlobal } from '../../../../utils/GlobalContext'

const TowarsContainer = () =>{
    
    const {data} = useGlobal()
    const [towars, setTowars] = useState(data);

    const [sortItem, setSortItem] = useState('Newest')
    
      const [filters, setFilters] = useState({
            room: '',
            minPrice: 50,
            maxPrice: 5000,
        });



    useEffect(() => {
        let sortedArr = [...data]; 

        if (filters.room && filters.room !== 'All Room') {
            sortedArr = sortedArr.filter(el => el.room === filters.room);
        }

        sortedArr = sortedArr.filter(el => el.price >= filters.minPrice && el.price <= filters.maxPrice);


        if (sortItem === 'New') {
            sortedArr = QuickSort(sortedArr);
        } else if (sortItem === 'Old') {
            sortedArr = QuickSortReverse(sortedArr);
        } else if (sortItem === 'From-max') {
            sortedArr = mergeSortAlphabetically(sortedArr);
        } else if (sortItem === 'From-min') {
            sortedArr = mergeSortAlphabeticallyReverse(sortedArr);
        }

        setTowars(sortedArr);
    }, [sortItem, data, filters]);





    return(
        <section className={Styles.Shop_Towars_Container}>
            <Toolbar setSortItem={setSortItem} sortItem={sortItem} filters={filters} setFilters={setFilters}/>
            <ItemsContainer towarsItemsArr={towars}/>
        </section>
    )
}

export default TowarsContainer
