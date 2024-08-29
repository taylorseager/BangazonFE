import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../api/productData';

export default function ProductDetailsCard({ productObj }) {
  console.warn('prod obj?', productObj);
  const [productDetails, setProductDetails] = useState({});
  console.warn('prod details', productDetails);
  const router = useRouter();
  const { id } = router.query;
  console.warn('card file', id);

  // pulling id here, but not on dynamic file....

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.image} />
      <Card.Body>
        <Card.Title>{productObj.title}</Card.Title>
        <Card.Text>{productObj.description}</Card.Text>
        <Card.Text>${productObj.price}</Card.Text>
        <Card.Text>Quantity Available: {productObj.quantityAvailable}</Card.Text>
      </Card.Body>
      <Button variant="success" href="/cart">Add to Cart</Button>
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
  }).isRequired,
};
