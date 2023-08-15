import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../CSS/SCSS/pages/admin/Admin.scss';
import { fetchBrands, fetchProducts, fetchCategories, fetchOrders, fetchCarts } from '../../http/productAPI';
import DivsTableComponent from './DivsTableComponent';
import { fetchClients } from '../../http/clientAPI';

const Admin = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowData = async (fetchFunction) => {
    try {
      setIsLoading(true);
      const result = await fetchFunction();
      setFetchedData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowProducts = async (fetchFunction) => {
    try {
      setIsLoading(true);
      const result = await fetchFunction();
      const data = result.rows
      const newData = data.map(({ info, colors, brand, category, ...rest }) => {
        return {
          ...rest,
          brand: brand.name,
          category: category.name,
        };
      });
      
      setFetchedData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='admin-main'>
      <div className='div-buttons'>
        <div className='show-btns'>
          <Button variant='outline-primary' onClick={() => handleShowProducts(fetchProducts)}>
            Show all Products
          </Button>
          <Button variant='outline-primary' onClick={() => handleShowData(fetchBrands)}>
            Show all Brands
          </Button>
          <Button variant='outline-primary' onClick={() => handleShowData(fetchCategories)}>
            Show all Categories
          </Button>
          <Button variant='outline-primary' onClick={() => handleShowData(fetchOrders)}>
            Show all Orders
          </Button>
          <Button variant='outline-primary' onClick={() => handleShowData(fetchClients)}>
            Show all Clients
          </Button>
          <Button variant='outline-primary' onClick={() => handleShowData(fetchCarts)}>
            Show all Carts
          </Button>
        </div>
        <div className='add-btns'>
          <Button variant='outline-success'>Add Product</Button>
          <Button variant='outline-success'>Add Brand</Button>
          <Button variant='outline-success'>Add Category</Button>
          {/* <Button variant='outline-success'>Create Order</Button> */}
          <Button variant='outline-success'>Add Client</Button>
          {/* <Button variant='outline-success'>Create Cart</Button> */}
        </div>
      </div>
      <div className='admin-content'>
        {isLoading ? (
          <div>Loading...</div> // You can display a loading spinner or message here
        ) : (
          <DivsTableComponent data={fetchedData} />
        )}
      </div>
    </div>
  );
};

export default Admin;
