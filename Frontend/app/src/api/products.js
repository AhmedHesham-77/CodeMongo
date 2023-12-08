import http from './http';

const apiUrl = 'http://localhost:5000/api';

const createProduct = data => http.post(`${apiUrl}/products`,data);

const productsApi = {createProduct}
export default productsApi