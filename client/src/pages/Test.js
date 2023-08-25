import React, { useContext, useState } from 'react';
import PartnersSlider from '../components/PartnersSlider';
import { Context } from '..';
import { toJS } from 'mobx';
import FavoriteHeart from '../components/commonComponents/FavoriteHeart';

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
    // const handleAddFavorite = async () => {
    //     const userId = user.user.id; // Get the user's ID from the context
    //     const productId = product[0].id; // Assuming you have an ID field in your product object
    //     try {
    //         const response = await addFavorite(userId, productId);
    //         console.log('Added to favorites:', response);
    //     } catch (error) {
    //         console.error('Error adding to favorites:', error);
    //     }
    // };

    // const handleRemoveFavorite = async () => {
    //     const userId = user.user.id; // Get the user's ID from the context
    //     const productId = product[0].id; // Assuming you have an ID field in your product object
    //     try {
    //         const response = await removeFavorite(userId, productId);
    //         console.log('Removed from favorites:', response);
    //     } catch (error) {
    //         console.error('Error removing from favorites:', error);
    //     }
    // };

    // const handleFetchFavorites = async () => {
    //     const userId = user.user.id; // Get the user's ID from the context
    //     try {
    //         const response = await fetchFavorites(userId);
    //         console.log('User favorites:', response);
    //     } catch (error) {
    //         console.error('Error fetching favorites:', error);
    //     }
    // };

    return (
        //    <HomeTabCard product={product[0]}/>
        <>
        <FavoriteHeart productId={3} userId={1}/>
        <button>add</button>
        <button>remove</button>
        <button>get</button>
        <PartnersSlider elements={sliderElements} />
        </>

    );
};

export default Test;