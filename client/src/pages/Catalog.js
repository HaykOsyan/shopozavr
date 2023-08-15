import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import SelectComponent from '../components/commonComponents/SelectComponent';
import RangeInput from '../components/commonComponents/RangeInput';
import ProductCard from '../components/ProductCard';
import '../CSS/SCSS/pages/Catalog.scss';
import { useParams } from 'react-router-dom';
import { fetchOneCategory, fetchProducts } from '../http/productAPI';

const Catalog = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([]);

    const [category, setCategory] = useState('');

    useEffect(() => {
        if (id) {
            fetchOneCategory(id)
                .then(response => {
                    // Assuming the category data contains a 'name' property
                    setCategory(response.name);
                })
                .catch(error => {
                    console.error('Error fetching category:', error);
                });
        }
    }, [id]);

    useEffect(() => {
        try {
            if (id) {
                fetchProducts(id)
                    .then(response => {
                        if (response.rows) {
                            setProducts(response.rows)
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching products:', error);
                    });
            } else {
                fetchProducts()
                    .then(response => {
                        if (response.rows) {
                            setProducts(response.rows)
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching products:', error);
                    });
            }
        } catch (error) {
            alert(error)
        }
    }, [id]);

    const sorting = ['new', 'old', 'up', 'down'];

    return (
        <div className='catalog-main'>
            <h3 className='page-title'>
                {id ? `products from category ${category}` : 'Catalog'}
            </h3>
            <div className='sorting-and-filters'>
                <div className='sorting-filter-header'>
                    <p>
                        <span>products {products.length}</span>
                    </p>
                    <Button variant='outline-primary'>
                        <span>Reset</span>
                    </Button>
                </div>
                <div className='sorting-filter-items'>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting} />
                    </div>
                    <div className='sorting-filter-item'>
                        <RangeInput />
                    </div>
                    <div className='sorting-filter-item'>

                    </div>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting} />
                    </div>
                    <div className='sorting-filter-item'>
                        <SelectComponent chooseText='Sort By' items={sorting} showArrow={true} />
                    </div>
                </div>
            </div>
            <div className='catalog-content'>
                {products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} />
                    )
                })}
            </div>
        </div>
    );
};

export default Catalog;