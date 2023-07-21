import React from 'react';
import { Link } from 'react-router-dom';

const HomeLeftBar = ({ categories }) => {
    return (
        <div className='home-leftbar'>
            <ul className='list-group'>
                {categories.map((category, index) => {
                    return (
                        <Link to={`/catalog/${category.id}`}
                            // href='#'
                            className="list-group-item list-group-item-action"
                            key={index}
                        >
                            {category.name}
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
};

export default HomeLeftBar;