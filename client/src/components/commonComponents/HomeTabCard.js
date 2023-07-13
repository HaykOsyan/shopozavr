import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import '../../CSS/SCSS/HomeTabCard.scss';

const HomeTabCard = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className="tab-card w-25" key={product.id}>
                <div className="tab-cart-header d-flex">
                    {product.sales && <div className="tab-cart-tags">sales</div>}
                    {product.discount && <div className="tab-cart-tags">{product.discount}%</div>}
                    {product.news && <div className="tab-cart-tags">news</div>}
                </div>
                <div className="card-image-container">
                    <img src={product.image} alt="Product" className="card-image" />
                    <span className="heart-icon">
                        <FaHeart />
                    </span>
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-price">${product.price} $</p>
                    </div>
                    <div className="card-footer">
                        <Button className="add-to-cart-button w-100">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTabCard;
