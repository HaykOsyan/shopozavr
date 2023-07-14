import React, { useState } from 'react';
import '../CSS/SCSS/ProductPage.scss';
import { Button } from 'react-bootstrap';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const ProductPage = () => {

    const [product, setProduct] = useState(
        {
            name: 'Jeans',
            price: 5000,
            sells: true,
            news: false,
            discount: -11,
            image: '../static/photos/jeans.jpg',
            description: 'Мягкая игрушка медвежонок сделана из высококачественного искусственного меха.',
            shortDescription: 'jeans for everyone',
            country: 'Italy',
            height: '100sm',
        }
    );

    console.log(product)
    return (
        <div className='product-main'>
            <div className='product-view'>
                <div className='product-tags'>
                    {product.sells && <div className="product-tag">sells</div>}
                    {product.discount && <div className="product-tag">{product.discount}%</div>}
                    {product.news && <div className="product-tag">news</div>}
                </div>
                <div className='product-image'>
                    <img className='product-img' src={product.image} alt='product' />
                </div>
            </div>
            <div className='product-information'>
                <div className='product-title'>
                    <h2>{product.name}</h2>
                    <p>{product.price} $</p>
                </div>
                <div className='product-buy'>
                    <Button>
                        <FaCartPlus />
                        Add to Cart
                    </Button>
                    <button className='btn-icon'>
                        <FaHeart />
                    </button>
                    <a href='#' className='link-buy-one-click'>
                        Buy One Click
                    </a>
                </div>
                <div className="product-short-description">
                    <div className="static-text">
                        <p>
                            <span>{product.shortDescription}</span>
                        </p>
                    </div>
                </div>
                <div className='product-description'>
                    <h4>Description</h4>
                    <p>
                        {product.description}
                    </p>
                    <button className='btn-show-all'>
                        Show all
                    </button>
                </div>
                <div className='product-properties'>
                    <h4>Properties</h4>
                    <div className='product-properties-content'>
                        <div className='product-country'>
                            <p>made in</p>
                            <p>{product.country}</p>
                        </div>
                        <div className='product-size'>
                            <p>Height</p>
                            <p>{product.height}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;