const baseUrl = 'https://localhost:7007';

// PROMISE TO FETCH ALL PRODUCTS
export const getProducts = () => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
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
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getSingleProduct,
};
