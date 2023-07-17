import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HomeTabCard from './HomeTabCard';

const HomeTab = ({ products }) => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-home"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="hits" title="Hits">
                {/* Tab content for Hits */}
                <div className='d-flex'>
                    {products.map((product, index) => (
                        <HomeTabCard key={index} product={product} />
                    ))}
                </div>
            </Tab>
            <Tab eventKey="news" title="News">
                Tab content for Profile
            </Tab>
            <Tab eventKey="sells" title="Sells">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
};

export default HomeTab;