// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Home() {
  // const [products, setProducts] = useState([]);

  // const getAllProudcts = () => {
  //   get
  // }
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello! </h1>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>

  // TODO: Update to map through all products
  );
}

export default Home;
