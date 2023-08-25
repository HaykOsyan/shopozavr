import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/SCSS/ProductCard.scss';
import { checkProductExistsInCart, createCartProduct, updateCartProduct } from '../http/productAPI';
import { Context } from '..';
import { toJS } from 'mobx';
import { LOGIN_ROUTE } from '../utils/consts';
import { $authHost } from '../http';
import jwtDecode from 'jwt-decode';
import FavoriteHeart from './commonComponents/FavoriteHeart';

const ProductCard = ({ product }) => {

    const [favourite, setFavourite] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [cartProduct, setCartProduct] = useState('');

    useEffect(() => {
        const decodedToken = jwtDecode(localStorage.getItem('token'));
        const cartId = decodedToken.cartId;
        checkProductExistsInCart(cartId, product.id)
            .then(response => {
                setCartProduct(response);
                setQuantity(response.quantity);
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching cart:', error);
            });
    }, [product.id, quantity])
    const navigate = useNavigate();

    const { user } = useContext(Context);

    const handleMakeFavourite = () => {
        setFavourite(!favourite); // Toggle the favourite state on button click
    };

    const handleAddToCart = async () => {

        if (user.isAuth) {
            try {
                // Call createCartProduct with the necessary data
                const cartId = toJS(user.user.cartId); // Provide the cartId
                const productId = product.id;
                const step = 1; // You can adjust the quantity as needed
                const price = product.price; // Assuming product.price is the correct price value
                const responseData = await createCartProduct(cartId, productId, step, price);
                setQuantity(quantity + step)
                // Handle the response data if needed
                console.log('Cart Product Created:', responseData);
            } catch (error) {
                // Handle any errors that might occur during the API call
                console.error('Error adding to cart:', error);
            }
        } else {
            navigate(LOGIN_ROUTE)
        }
    };

    const handleDecreaseFromCart = async () => {
        if (user.isAuth) {
            try {
                const newQuantity = quantity - 1; // Decrease the quantity by 1
                setQuantity(newQuantity)
                const responseData = await updateCartProduct(cartProduct.id, newQuantity);

                // Handle the response data if needed
                console.log('Cart Product Quantity Updated:', responseData);
            } catch (error) {
                // Handle any errors that might occur during the API call
                console.error('Error updating cart product quantity:', error);
            }
        } else {
            navigate(LOGIN_ROUTE);
        }
    };
    return (
        <div className='product-card'>
            <div className='card-title'>
            </div>
            <div className='card-body'>
                <Link to={`/product/${product.id}`}>
                    <img className='card-image' src={$authHost.defaults.baseURL + 'photos/' + product.img} alt={product.name} />
                </Link>
                <FavoriteHeart userId={toJS(user.user.id)} productId={product.id}/>
                {/* <button
                    className={`make-favourite ${favourite ? 'favourite' : 'not-favourite'}`}
                    onClick={handleMakeFavourite}
                >
                    <FaHeart />
                </button> */}
            </div>
            <div className='card-footer'>
                <div className='card-information'>
                    <p className='product-name-text'>{product.name}</p>
                    <p className='product-price-text'>Price {product.price}</p>
                    <p className='product-price-text'>In Stock {product.quantity}</p>
                </div>
                <div>
                    <button onClick={handleDecreaseFromCart} className='btn-for-cart'>-</button>
                    <button className='btn-add-to-cart'>
                        {quantity > 0 ? quantity : <FaCartPlus />}
                    </button>
                    <button onClick={handleAddToCart} className='btn-for-cart'>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
