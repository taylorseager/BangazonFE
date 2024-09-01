import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getOrderByUserID } from '../api/orderData';
import ProductCard from '../components/ProductCard';

export default function ViewCart() {
  const [product, setProduct] = useState({});
  console.warn(product);
  const router = useRouter();
  // const { user } = useAuth();
  const { id } = router.query;

  useEffect(() => {
    getOrderByUserID(id).then(setProduct);
  }, [id]);

  return (
    <div>
      <ProductCard />
    </div>
  );
}
