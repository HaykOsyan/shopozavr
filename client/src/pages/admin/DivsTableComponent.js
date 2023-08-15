import React, { useState, useEffect } from 'react';

const DivsTableComponent = ({data}) => {

    const [ths, setThs] = useState([]);
    const [tds, setTds] = useState([]);
    
    useEffect(() => {
        // Set the table headers (ths) to the keys of the first object in the data array
        setThs(Object.keys(data[0] || {}));

        // Set the table data (tds) to the entire data array
        setTds(data);
    }, [data]); // The empty dependency array ensures this useEffect runs only once on mount
    return (
        <div className='divs-table-component'>
            <div className='table-headers d-flex justify-content-between'>
                {ths.map((th) => {
                    return <div className='table-header' key={th}>{th}</div>;
                })}
            </div>
            <div className='table-rows'>
                {tds.map((td) => {
                    return (
                        <div className='table-row d-flex justify-content-between' key={td.id}>
                            {ths.map((th, index) => {
                                return (
                                    <div key={index}>{td[th]}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DivsTableComponent;