import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function OrderItemCard({ productObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productObj.image} />
        <Card.Body>
          <Card.Text>{productObj.title}</Card.Text>
          <Card.Text>${productObj.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

OrderItemCard.propTypes = {
  productObj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
