import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createOrderItem } from '../api/orderItemData';
import { useAuth } from '../utils/context/authContext';
import { getOrderByUserID, createOrder } from '../api/orderData';

export default function ProductDetailsCard({ productObj }) {
  const auth = useAuth();
  const router = useRouter();

  const addProductToCart = async () => {
    const usersOrder = await getOrderByUserID(auth.user.uid);
    console.warn(usersOrder);
    let order = usersOrder;
    if (order === 'Not Found') {
      order = await createOrder({ UserId: auth.user.uid });
    }
    const orderItemDTO = {
      productId: productObj.id,
      orderId: order.id,
      quantity: 1,
    };
    const addToCartResponse = await createOrderItem(orderItemDTO);
    if (addToCartResponse === 'added to cart') {
      router.push('/');
      console.warn('added to cart time to redirect');
    } else {
      console.warn('error something went wrong');
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.image} />
      <Card.Body>
        <Card.Title>{productObj.title}</Card.Title>
        <Card.Text>{productObj.description}</Card.Text>
        <Card.Text>${productObj.price}</Card.Text>
        <Card.Text>Quantity Available: {productObj.quantityAvailable}</Card.Text>
      </Card.Body>
      <Button variant="success" onClick={addProductToCart}>Add to Cart</Button>
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
  // orderObj: PropTypes.shape({
  //   id: PropTypes.number,
  // }).isRequired,
};
