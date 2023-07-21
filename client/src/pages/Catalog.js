import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SelectComponent from '../components/commonComponents/SelectComponent';
import RangeInput from '../components/commonComponents/RangeInput';
import ProductCard from '../components/ProductCard';
import '../CSS/SCSS/pages/Catalog.scss';
import { useParams } from 'react-router-dom';

const Catalog = ({ products }) => {

    const {id} = useParams();
    
    const [product, setProduct] = useState(
        {
            id:2,
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

    const sorting = ['new', 'old', 'up', 'down']
    return (
        <div className='catalog-main'>
            <h3 className='page-title'>
                {id ? `products with id ${id}` : 'Catalog'}
            </h3>
            <div className='sorting-and-filters'>
                <div className='sorting-filter-header'>
                    <p>
                        <span>products 55</span>
                    </p>
                    <Button variant='outline-primary'>
                        <span>Reset</span>
                    </Button>
                </div>
                <div className='sorting-filter-items'>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting}/>
                    </div>
                    <div className='sorting-filter-item'>
                        <RangeInput />
                    </div>
                    <div className='sorting-filter-item'>
                        
                    </div>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting}/>
                    </div>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting} showArrow={true}/>
                    </div>
                </div>
            </div>
<div className='catalog-content'>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
</div>
        </div>
    );
};

export default Catalog;