import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { getProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  const getAllProudcts = () => {
    getProducts().then(setProducts);
  };

  useEffect(() => {
    getAllProudcts();
  }, []);

  return (
    <div
      className="d-flex flex-wrap"
    >
      {products.map((product) => (<ProductCard productObj={product} key={product.id} />))}
    </div>

  // TODO: Update to map through all products
  );
}

// <h1>Hello! </h1>
// <p>Click the button below to logout!</p>
// <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
//   Sign Out
// </Button>

export default Home;
