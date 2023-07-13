import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeWallpaper from '../components/commonComponents/HomeWallpaper';
import HomeLeftBar from '../components/commonComponents/HomeLeftBar';
import Slider from '../components/Slider';
import HomeTabCard from '../components/commonComponents/HomeTabCard';
import HomeKidsSection from '../components/commonComponents/HomeKidsSection';
import HomeDelivery from '../components/commonComponents/HomeDelivery';
import PartnersSlider from '../components/PartnersSlider';
import HomeAboutUs from '../components/commonComponents/HomeAboutUs';
import Footer from '../components/Footer';
import FollowUs from '../components/commonComponents/FollowUs';
import HomePopular from '../components/commonComponents/HomePopular';

const Home = () => {

    const wallPaper = {
        img: './static/photos/wallpaper.jpg',
        header: 'best quality',
        text: 'text about clothes and mend',
    }
    const elms = [
        <p>sfdfsdfsdfsf</p>,
        <p>sfdfsdfsdfsf</p>,
        <p>tttttttttttt</p>,
        <p>eee</p>,
        <p>wwewerwerwerrw</p>,
        <p>xcvcxv</p>,
        <p>vvvvvvvvvvvvvvv</p>,
        <p>wwwwwwwwwwwww</p>,
        <p>sfdfsdfsdfsf</p>,
        <p>45654654654</p>,
    ]

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

    const leftBarCategories = [
        'Для девочек',
        'Для мальчиков',
        'Для новорожденных',
        'Канцелярия',
        'Аксессуары',
        'Спорт',
        'Настольные игры',
        'Коляски',
        'Развитие',
        'Конструкторы',
        'Хиты',
        'Новинки',
        'Акции',
        'Популярное'
    ];

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
        <Container fluid>
            <Row>
                <Col xs={3} md={3}>
                    <HomeLeftBar categories={leftBarCategories} />
                    <FollowUs/>
                    <HomePopular/>
                </Col>
                <Col xs={9} md={9}>
                    <HomeWallpaper wallPaper={wallPaper} />
                    <Slider elements={elims} />
                    <div className='d-flex'>
                        {products.map((product, index) => (
                            <HomeTabCard key={index} product={product} />
                        ))}
                    </div>
                    <HomeKidsSection/>
                    <HomeDelivery/>
                    <PartnersSlider elements={sliderElements}/>
                    <HomeAboutUs/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default Home;