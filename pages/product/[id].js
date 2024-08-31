import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../api/productData';
import ProductDetailsCard from '../../components/ProductDetailsCard';

export default function ViewSingleProduct() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, [id]);

  return (
    <div>
      <ProductDetailsCard productObj={product} key={product.id} />
    </div>
  );
}
