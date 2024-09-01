import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createOrderItem } from '../api/orderItemData';
import { useAuth } from '../utils/context/authContext';
import { getSingleProduct } from '../api/productData';

export default function ProductDetailsCard() {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addProductToCart = () => {
    window.alert('Product added to cart!');
    const payload = {
      productId: product.id,
      userId: user.id,
    };
    console.warn(payload);
    createOrderItem(payload);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>Quantity Available: {product.quantityAvailable}</Card.Text>
      </Card.Body>
      <Button href="/carts" variant="success" onClick={addProductToCart}>Add to Cart</Button>
    </Card>
  );
}

ProductDetailsCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    quantityAvailable: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    orderId: PropTypes.number,
  }).isRequired,
};
