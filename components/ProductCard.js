import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.image} />
      <Card.Body>
        <Card.Title>{productObj.title}</Card.Title>
        <Card.Text>${productObj.price}</Card.Text>
        <Card.Text>Quantity Available: {productObj.quantityAvailable}</Card.Text>
      </Card.Body>
      <Button variant="primary" href="/product/{id}">Product Details</Button>
      <Button variant="success" href="/cart">Add to Cart</Button>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    quantityAvailable: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
