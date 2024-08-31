const baseUrl = 'https://localhost:7007';

const createOrderItem = (payload) => new Promise((resolve, reject) => {
  console.warn('made it');
  fetch(`${baseUrl}/api/orderitem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderItems = (id) => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/api/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrderItem = (orderItemId) => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/api/orders/${orderItemId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createOrderItem,
  getOrderItems,
  deleteOrderItem,
};
