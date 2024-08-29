import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../api/productData';
import ProductDetailsCard from '../../components/ProductDetailsCard';

export default function ViewSingleProduct() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;
  console.warn('dynamic file', id);

  // const viewProductDetails = () => {
  //   getSingleProduct(id).then(setProduct);
  // };

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <ProductDetailsCard productDetObj={product} key={product.id} />
    </div>
  );
}
