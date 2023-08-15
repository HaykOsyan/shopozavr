import React, { useContext, useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/SCSS/ProductCard.scss';
import { createCartProduct } from '../http/productAPI';
import { Context } from '..';
import { toJS } from 'mobx';
import { LOGIN_ROUTE } from '../utils/consts';

const ProductCard = ({ product }) => {

    const [favourite, setFavourite] = useState(false);

    const navigate = useNavigate();

    const { user } = useContext(Context);

    const handleMakeFavourite = () => {
        setFavourite(!favourite); // Toggle the favourite state on button click
    };

    const handleAddToCart = async () => {
       
        if(user.isAuth){
            try {
                // Call createCartProduct with the necessary data
                const cartId = toJS(user.user.cartId); // Provide the cartId
                const productId = product.id;
                const quantity = 1; // You can adjust the quantity as needed
                const price = product.price; // Assuming product.price is the correct price value
                const responseData = await createCartProduct(cartId, productId, quantity, price);
    
                // Handle the response data if needed
                console.log('Cart Product Created:', responseData);
            } catch (error) {
                // Handle any errors that might occur during the API call
                console.error('Error adding to cart:', error);
            }
        }else{
            navigate(LOGIN_ROUTE)
        }
    };



    return (
        <div className='product-card'>
            <div className='card-title'>
            </div>
            <div className='card-body'>
                <Link to={`/product/${product.id}`}>
                    <img className='card-image' src='../static/photos/kids1.jpg' alt="nkar" />
                </Link>
                <button
                    className={`make-favourite ${favourite ? 'favourite' : 'not-favourite'}`}
                    onClick={handleMakeFavourite}
                >
                    <FaHeart />
                </button>
            </div>
            <div className='card-footer'>
                <div className='card-information'>
                    <p className='product-name-text'>{product.name}</p>
                    <p className='product-price-text'>{product.price}</p>
                </div>
                <div>
                    <button className='btn-for-cart'>-</button>
                    <button className='btn-add-to-cart'>
                        <FaCartPlus />
                    </button>
                    <button onClick={handleAddToCart} className='btn-for-cart'>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
