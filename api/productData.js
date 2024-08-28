// import { clientCredentials } from '../utils/client';

const baseUrl = "https://localhost:7007"

// PROMISE TO FETCH ALL PRODUCTS
const getProducts = () => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/api/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getProducts,
  getSingleProduct,
};
