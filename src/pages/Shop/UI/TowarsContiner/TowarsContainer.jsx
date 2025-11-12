
import Styles from './TowarsContainerStyle.module.scss'

import Toolbar from '../../../../components/Toolbar/Toolbar'
import ItemsContainer from '../../../../components/ItemsContainer/ItemsContainer'
import { useEffect, useMemo, useState } from 'react'

import { mergeSortAlphabetically, mergeSortAlphabeticallyReverse, QuickSort, QuickSortReverse} from '../../../../utils/sortUtils' 

const TowarsContainer = () =>{
    
    const arr = useMemo(() => [
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Classic', price:300, oldPrice:200, date:'2025-11-01', room:'Living Room' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Modern', price:300, date:'2025-11-03', room:'Bedroom' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Retro', price:500, oldPrice:200, date:'2025-10-28', room:'Dinning' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Nordic', price:800, date:'2025-11-05', room:'Outdoor' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Mini', price:300, date:'2025-11-02', room:'Bathroom' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Soft', price:300, oldPrice:200, date:'2025-10-30', room:'Bedroom' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Glass', price:500, date:'2025-11-04', room:'Living Room' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Metal', price:800, oldPrice:200, date:'2025-10-29', room:'Dinning' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Sky', price:800, date:'2025-11-06', room:'Outdoor' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Art', price:300, oldPrice:200, date:'2025-10-31', room:'Bathroom' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Simple', price:300, date:'2025-11-07', room:'Bedroom' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Line', price:500, oldPrice:200, date:'2025-10-27', room:'Dinning' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa White', price:800, date:'2025-11-08', room:'Living Room' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'new', discount:'-50', name:'Lampa Deco', price:300, date:'2025-11-09', room:'Bathroom' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'alt', discount:'-50', name:'Lampa Base', price:300, oldPrice:200, date:'2025-10-26', room:'Outdoor' },
    { stars: 5, img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg', status:'sale', discount:'-50', name:'Lampa Pure', price:500, date:'2025-11-10', room:'Living Room' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Gold', price:800, oldPrice:200, date:'2025-11-11', room:'Dinning' },
    { stars: 5, img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg', status:'new', discount:'-50', name:'Lampa Crystal', price:800, date:'2025-11-12', room:'Outdoor' }
    ], []);



    const [towars, setTowars] = useState(arr);

    const [sortItem, setSortItem] = useState('Newest')
    
      const [filters, setFilters] = useState({
            room: '',
            minPrice: 50,
            maxPrice: 5000,
        });



    useEffect(() => {
        let sortedArr = [...arr]; 

        if (filters.room && filters.room !== 'All Room') {
            sortedArr = sortedArr.filter(el => el.room === filters.room);
        }

        sortedArr = sortedArr.filter(el => el.price >= filters.minPrice && el.price <= filters.maxPrice);


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
    }, [sortItem, arr, filters]);





    return(
        <section className={Styles.Shop_Towars_Container}>
            <Toolbar setSortItem={setSortItem} sortItem={sortItem} filters={filters} setFilters={setFilters}/>
            <ItemsContainer towarsItemsArr={towars}/>
        </section>
    )
}

export default TowarsContainer
