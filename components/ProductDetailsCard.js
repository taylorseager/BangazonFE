import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductDetailsCard({ productObj }) {
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
