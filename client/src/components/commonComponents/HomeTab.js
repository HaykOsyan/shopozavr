import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const HomeTab = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-home"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="hits" title="Hits">
                Tab content for Home
            </Tab>
            <Tab eventKey="news" title="News">
                Tab content for Profile
            </Tab>
            <Tab eventKey="sells" title="Sells" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    );
};

export default HomeTab;