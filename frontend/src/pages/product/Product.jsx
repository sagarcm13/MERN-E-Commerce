import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ProductLeft from './ProductLeft.jsx';
import ProductRight from './ProductRight.jsx';
import { useProductDetail } from '../../api.js';
export default function Product() {
  const { state } = useLocation();
  const params = state;
  const { data, isFetched } = useProductDetail(params.id);
  const [productData, setProductData] = useState(data);
  useEffect(() => {
    setProductData(data);
  }, [data]);
  if (!isFetched) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex flex-col md:flex-row'>
      <ProductLeft data={productData} />
      <ProductRight data={productData} />
    </div>
  )
}

