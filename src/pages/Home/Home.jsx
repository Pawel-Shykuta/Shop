
import { useState } from 'react'
import Styles from './HomeStyle.module.scss'
import BlogSection from './UI/BlogSection/BlogSection'

import HomeBaners from './UI/HomeBaners/Home_Baners'
import HomeNewProducts from './UI/HomeNewProducts/HomeNewProducts'
import HomeSliderSection from './UI/HomeSliderSection/HomeSliderSection'
import ImagePlaceholder from './UI/ImagePlaceholder/ImagePlaceholder'
import Loyout from './UI/Loyout/Loyout'
import Values from './UI/Values/Values'


const Home = () =>{

    const arr = [
        {
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'alt',
            discount:'-50',
            name:'lampa',
            price:300
        },{
            stars: 5,
            img:'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
            status:'sale',
            discount:'-50',
            name:'lampa',
            price:500
        },{
            stars: 5,
            img:'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
            status:'new',
            discount:'-50',
            name:'lampa',
            price:800
        }
    ]   

    const [email, setEmail] = useState('')

    return(
        <section className={Styles.Home_Wrapper}>
            <HomeSliderSection />
            <HomeBaners/>
            <HomeNewProducts arr={arr}/>
            <Values/>
            <Loyout/>
            <BlogSection/>
            <ImagePlaceholder email={email} setEmail={setEmail}/>
        </section>
    )
}

export default Home
