import React, { useState } from 'react';
import HomeWallpaper from '../components/commonComponents/homePageComponents/HomeWallpaper';
import Slider from '../components/Slider';
import HomeKidsSection from '../components/commonComponents/homePageComponents/HomeKidsSection';
import HomeDelivery from '../components/commonComponents/homePageComponents/HomeDelivery';
import PartnersSlider from '../components/PartnersSlider';
import HomeAboutUs from '../components/commonComponents/homePageComponents/HomeAboutUs';
import HomeTab from '../components/commonComponents/homePageComponents/HomeTab';
import { Link } from 'react-router-dom';

const Home = () => {

    const wallPaper = {
        img: './static/photos/wallpaper.jpg',
        header: 'best quality',
        text: 'text about clothes and mend',
    }

    const categories = [
        {
          id: 1,
          name: 'muj',
          img: './static/photos/photo_clothes.jpg'
        },
        {
          id: 2,
          name: 'kids',
          img: './static/photos/kkids_clothes.jpg'
        },
        {
          id: 3,
          name: 'jeans',
          img: './static/photos/jeans.jpg'
        },
        {
          id: 4,
          name: 'muj',
          img: './static/photos/photo_clothes.jpg'
        },
        {
          id: 5,
          name: 'kids',
          img: './static/photos/kkids_clothes.jpg'
        },
        {
          id: 6,
          name: 'jeans',
          img: './static/photos/jeans.jpg'
        },
        {
          id: 7,
          name: 'muj',
          img: './static/photos/photo_clothes.jpg'
        },
        {
          id: 8,
          name: 'kids',
          img: './static/photos/kkids_clothes.jpg'
        },
        {
          id: 9,
          name: 'jeans',
          img: './static/photos/jeans.jpg'
        },
      ];

    const [products, setProducts] = useState([
        {
            name: 'product.1',
            price: 5000,
            sells: true,
            hits:true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
        {
            name: 'product.1',
            price: 5000,
            sells: true,
            hits:false,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
        {
            name: '333333333.1',
            price: 5000,
            sells: true,
            hits: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
        {
            name: 'chorord.1',
            price: 5000,
            sells: true,
            hits:true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        },
    ]);

    const filterProducts = (filterBy) => {
        return products.filter((product) => product[filterBy]);
    }

    // Stanum enq array hits from products where hits:true
    const hits = filterProducts('hits');

    const sells = filterProducts('sells');

    const news = filterProducts('news');



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
            <Link to={`/catalog/${category.id}`} xs={3} md={3} key={index}>
                <img className='w-100' src={category.img} alt='nkar' />
                <h3>{category.name}</h3>
            </Link>
        )
    })

    return (
        <div className='home-page-main'>
            <HomeWallpaper wallPaper={wallPaper} />
            <Slider elements={elims} />
            <HomeTab hits={hits} />
            <HomeKidsSection />
            <HomeDelivery />
            <PartnersSlider elements={sliderElements} />
            <HomeAboutUs />
        </div>
    );
};

export default Home;