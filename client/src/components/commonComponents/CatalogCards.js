import React from 'react';
import { Col } from 'react-bootstrap';

const CatalogCards = ({ categories }) => {

    return (
        categories.map((category, index) => {
            return (
                <Col xs={6} md={4} key={index}>
                    <img className='w-100' src={category.img} alt='nkar'/>
                    <h3>{category.name}</h3>
                </Col>
            )
        })
    );
};

export default CatalogCards;