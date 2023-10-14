import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ProductLeft from './product/ProductLeft';
import ProductRight from './product/ProductRight';
import { useProductDetail } from './api';
export default function Product() {
  const { state } = useLocation();
  const params = state;
  const { data, isFetched } = useProductDetail(params.id);
  const [productData, setProductData] = useState(data);
  useEffect(() => {
    setProductData(data);
  }, [data]);
  return (
    <div>
      <ProductLeft data={productData} />
      <ProductRight data={productData} />
    </div>
  )
}

