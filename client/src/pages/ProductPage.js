import React, { useRef, useState } from 'react';
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
            description: 'Мягкая игрушка медвежонок сделана из высококачественного искусственного меха. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            shortDescription: 'jeans for everyone',
            country: 'Italy',
            height: '100sm',
            imageFront: '../static/photos/donald-duck.png',
            imageBack: '../static/photos/kids1.jpg',
            imageLeft: '../static/photos/kids2.jpg',
            imageRight: '../static/photos/kkids_clothes.jpg'
        }
    );
    let productImages = [
        product.image,
        product.imageRight,
        product.imageFront,
        product.imageLeft,
        product.imageBack,
    ]

    const [activeImage, setActiveImage] = useState(productImages[0]);

    const productDescriptionRef = useRef(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const descriptionToShow = showFullDescription ? product.description : product.description.split('\n')[0];

    const handleShowMore = () => {
        setShowFullDescription(true);
        productDescriptionRef.current.style.height = 'auto';
    };

    const handleShowLess = () => {
        setShowFullDescription(false);
        productDescriptionRef.current.style.height = '26px';
    };

    const sliderElements = productImages.map((image, index) => {
        if (image !== activeImage) {
            return (
                <img
                    src={image}
                    alt='sliderPhoto'
                    className='product-slider-image'
                    key={index}
                    onClick={() => setActiveImage(image)}
                />
            );
        }
        return null;
    });

    return (
        <>
            <div className='product-main'>
                <div className='product-view'>
                    <div className='product-tags'>
                        {product.sells && <div className="product-tag">sells</div>}
                        {product.discount && <div className="product-tag">{product.discount}%</div>}
                        {product.news && <div className="product-tag">news</div>}
                    </div>
                    <div className='product-image'>
                        <img className='product-img' src={activeImage} alt='product' />
                        <div className='product-slider'>
                            {sliderElements}
                        </div>
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
                        <Button variant='outline-light' className='btn-icon'>
                            <FaHeart />
                        </Button>
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
                        <p ref={productDescriptionRef} id='productDescriptionText'>
                            {descriptionToShow}
                        </p>
                        {!showFullDescription ? (
                            <Button variant='outline-success' className='btn-show-all' onClick={handleShowMore}>
                                Show more
                            </Button>
                        ) : (
                            <Button variant='outline-success' className='btn-show-all' onClick={handleShowLess}>
                                See less
                            </Button>
                        )}
                    </div>
                    <div className='product-properties'>
                        <h4>Properties</h4>
                        <div className='product-properties-content'>
                            {/* Here can be object or array of properties and map it in future */}
                            <div className='product-country'>
                                <p className='property-title'>made in</p>
                                <p className='property-item'>{product.country}</p>
                            </div>
                            <div className='product-size'>
                                <p className='property-title'>Height</p>
                                <p className='property-item'>{product.height}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;