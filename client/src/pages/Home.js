import React, { useState } from 'react';
import HomeWallpaper from '../components/commonComponents/HomeWallpaper';
import Slider from '../components/Slider';
import HomeKidsSection from '../components/commonComponents/HomeKidsSection';
import HomeDelivery from '../components/commonComponents/HomeDelivery';
import PartnersSlider from '../components/PartnersSlider';
import HomeAboutUs from '../components/commonComponents/HomeAboutUs';
import HomeTab from '../components/commonComponents/HomeTab';

const Home = () => {

    const wallPaper = {
        img: './static/photos/wallpaper.jpg',
        header: 'best quality',
        text: 'text about clothes and mend',
    }

    const categories = [
        {
            name: 'muj',
            img: './static/photos/photo_clothes.jpg'
        },
        {
            name: 'kids',
            img: './static/photos/kkids_clothes.jpg'
        },
        {
            name: 'jeans',
            img: './static/photos/jeans.jpg'
        },
        {
            name: 'muj',
            img: './static/photos/photo_clothes.jpg'
        },
        {
            name: 'kids',
            img: './static/photos/kkids_clothes.jpg'
        },
        {
            name: 'jeans',
            img: './static/photos/jeans.jpg'
        },
        {
            name: 'muj',
            img: './static/photos/photo_clothes.jpg'
        },
        {
            name: 'kids',
            img: './static/photos/kkids_clothes.jpg'
        },
        {
            name: 'jeans',
            img: './static/photos/jeans.jpg'
        },
    ]

    const [products, setProducts] = useState([
        {
            name: 'product.1',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
        {
            name: 'product.1',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
        {
            name: '333333333.1',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },

        {
            name: 'chorord.1',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
    ]);

    const partners = [
        {
            name: 'cola',
            image: './static/logos/logo2.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo3.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo3.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo6.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo2.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo6.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo2.png'
        },
    ]

    // partners array getting elements for partnersslider
    const sliderElements = partners.map((partner, index) => {
        return (
            <img key={partner.name} src={partner.image} alt='logo' />
        )
    })

    const elims = categories.map((category, index) => {
        return (
            <div xs={3} md={3} key={index}>
                <img className='w-100' src={category.img} alt='nkar' />
                <h3>{category.name}</h3>
            </div>
        )
    })

    return (
        <div className='home-page-main'>
            <HomeWallpaper wallPaper={wallPaper} />
            <Slider elements={elims} />
            <HomeTab products={products} />
            <HomeKidsSection />
            <HomeDelivery />
            <PartnersSlider elements={sliderElements} />
            <HomeAboutUs />
        </div>
    );
};

export default Home;