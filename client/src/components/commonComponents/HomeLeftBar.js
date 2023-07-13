import React from 'react';

const HomeLeftBar = ({ categories }) => {
    return (
        <div className='home-leftbar'>
            <ul className='list-group'>
                {categories.map((category, index) => {
                    return (
                        <button
                            // href='#'
                            className="list-group-item list-group-item-action"
                            key={index}
                        >
                            {category}
                        </button>
                    )
                })}
            </ul>
        </div>
    );
};

export default HomeLeftBar;