import React, { useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../CSS/SCSS/ProductCard.scss';

const ProductCard = ({ product }) => {

    const [favourite, setFavourite] = useState(false);

    const handleMakeFavourite = () => {
        setFavourite(!favourite); // Toggle the favourite state on button click
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
                    <button className='btn-add-to-cart'>
                        <FaCartPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
