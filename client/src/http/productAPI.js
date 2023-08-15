import { $host, $authHost } from ".";

export const createProduct = async (product) => {
    const {data} = await $host.post('api/product',product,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    return data
}

export const fetchProducts = async (categoryId, brandId, limit, page) => {
    const params = { page };
    if (categoryId) {
      params.categoryId = categoryId;
    }
  
    if (brandId) {
      params.brandId = brandId;
    }
  
    if (limit) {
      params.limit = limit;
    }
  
    const response = await $host.get('api/product', { params });
    return response.data;
  };

export const fetchOneProduct = async (id) => {
    const data = await $host.get('api/product/' + id)
    return data
}

export const updateProduct = async (productId, updatedProduct) => {
    const { data } = await $authHost.put(`api/product/${productId}`, updatedProduct, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    return data;
  };

export const fetchCarts = async () => {
    const {data} = await $host.get('api/cart')
    return data
}

export const fetchOneCart = async (id) => {
    const {data} = await $host.get('api/cart/' +id)
    return data
}

export const createOrder = async (cartId, productIds, quantities, prices) => {
    const {data} = await $authHost.post('api/order',{'cartId':cartId,'productIds':productIds, 'quantities':quantities, 'prices':prices})
    return data
}

export const fetchOrders = async () => {
    const {data} = await $host.get('api/order')
    return data
}

export const fetchOneOrder = async (id) => {
    const data = await $host.get('api/order/' + id)
    return data
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', {'name': category})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data.categories
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand',{'name': brand})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data.brands
}

export const fetchOneBrand = async (id) => {
    const {data} = await $host.get('api/brand/' + id)
    return data
}

export const createCartProduct = async (cartId, productId, quantity, price) => {
    const {data} = await $host.post('api/cart_product', {'cartId':cartId,'productId':productId, 'quantity':quantity, 'price':price})
    return data
}
// only for quantity
export const updateCartProduct = async (id,quantity) => {
    const {data} = await $host.put('api/cart_product/'+id, {'quantity':quantity})
    return data
}

