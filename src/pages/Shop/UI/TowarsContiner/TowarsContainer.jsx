
import Styles from './TowarsContainerStyle.module.scss'

import Toolbar from '../../../../components/Toolbar/Toolbar'
import ItemsContainer from '../../../../components/ItemsContainer/ItemsContainer'
import { useEffect, useMemo, useState } from 'react'

import { mergeSortAlphabetically, mergeSortAlphabeticallyReverse, QuickSort, QuickSortReverse} from '../../../../utils/sortUtils' 

const TowarsContainer = () =>{
    
    const arr = useMemo(() => [
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'lampa', price:300, oldPrice:200, date:'2025-11-01' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'lampa', price:300, date:'2025-11-03' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'lampa', price:500, oldPrice:200, date:'2025-10-28' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, date:'2025-11-05' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'lampa', price:300, date:'2025-11-02' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'lampa', price:300, oldPrice:200, date:'2025-10-30' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'lampa', price:500, date:'2025-11-04' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, oldPrice:200, date:'2025-10-29' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, date:'2025-11-06' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'lampa', price:300, oldPrice:200, date:'2025-10-31' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'lampa', price:300, date:'2025-11-07' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'lampa', price:500, oldPrice:200, date:'2025-10-27' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, date:'2025-11-08' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'lampa', price:300, date:'2025-11-09' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'lampa', price:300, oldPrice:200, date:'2025-10-26' },
        { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'lampa', price:500, date:'2025-11-10' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, oldPrice:200, date:'2025-11-11' },
        { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'lampa', price:800, date:'2025-11-12' }
    ], []);


    const [towars, setTowars] = useState(arr);
    const [sortItem, setSortItem] = useState('Newest')
    
    useEffect(() => {
        let sortedArr = [...arr]; 

        if (sortItem === 'Newest') {
            sortedArr = QuickSort(sortedArr);
        } else if (sortItem === 'Oldest') {
            sortedArr = QuickSortReverse(sortedArr);
        } else if (sortItem === 'A–Z') {
            sortedArr = mergeSortAlphabetically(sortedArr);
        } else if (sortItem === 'Z–A') {
            sortedArr = mergeSortAlphabeticallyReverse(sortedArr);
        }

        setTowars(sortedArr);
    }, [sortItem, arr]);


    return(
        <section className={Styles.Shop_Towars_Container}>
            <Toolbar setSortItem={setSortItem} sortItem={sortItem}/>
            <ItemsContainer towarsItemsArr={towars}/>
        </section>
    )
}

export default TowarsContainer
