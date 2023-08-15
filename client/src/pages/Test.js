import React, { useContext, useState } from 'react';
import PartnersSlider from '../components/PartnersSlider';
import { Context } from '..';
import { toJS } from 'mobx';

const Test = () => {

    const [product, setProduct] = useState([
        {
            name: 'product.1',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: './static/photos/donald-duck.png',
        }
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
            image: './static/logos/logo4.png'
        },
        {
            name: 'cola',
            image: './static/logos/logo5.png'
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

    const user = useContext(Context);
        console.log(toJS(user.user))

    const sliderElements = partners.map((partner, index) => {
        return (
            <img key={partner.name} src={partner.image} alt='logo' />
        )
    })


    return (
        //    <HomeTabCard product={product[0]}/>
        <PartnersSlider elements={sliderElements} />
    );
};

export default Test;