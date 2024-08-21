import React, { useEffect, useState } from 'react';
import { useProducts } from '../api';
import { Link } from 'react-router-dom';

export default function Right({ type, filter, sortBy }) {
  const { data, isFetched } = useProducts(type);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    if (data) {
      let productDataFilter = applyingFilter(data, filter, sortBy);
      setProductData(productDataFilter);
    }
  }, [data,sortBy, filter]);

  if (!isFetched) {
    return <div>Loading...</div>;
  }
  return (
    <div className='float-r w-[75%] flex'>
      <ul className="flex-col w-[100%]">
        {productData.length > 0 &&
          productData.map((item) => (
            <li className='' id={item._id} key={item._id}>
              <div className='flex border-white border-2 border-r-0'>
                <div className="float-l w-[30%] flex justify-center m-6">
                  <img src={item.Images.i1} height={200} width={200} alt="" />
                </div>
                <div className="float-r w-[70%] m-6">
                  <Link to='/product' state={{ id: item._id }}>
                    <div className="desc text-white text-3xl m-2">{item.name}</div>
                    <div className="price text-white text-3xl m-2">₹{item.price}</div>
                  </Link>
                  <button className='bg-teal-500 text-white m-2 p-2 rounded-xl'>Add to cart</button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

const applyingFilter = (data, filter, sortBy) => {
  if (filter === 'none' && sortBy === 'none') {
    return data;
  } else if (filter === 'none' && sortBy === 'htl') {
    return data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === 'none' && sortBy === 'lth') {
    return data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (filter === 'b20' && sortBy === 'none') {
    return data.filter((item) => item.price < 20000);
  } else if (filter === 'b20' && sortBy === 'htl') {
    return data
      .filter((item) => item.price < 20000)
      .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === 'b20' && sortBy === 'lth') {
    return data
      .filter((item) => item.price < 20000)
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (filter === '20-45' && sortBy === 'none') {
    return data.filter((item) => item.price >= 20000 && item.price < 45000);
  } else if (filter === '20-45' && sortBy === 'htl') {
    return data
      .filter((item) => item.price >= 20000 && item.price < 45000)
      .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === '20-45' && sortBy === 'lth') {
    return data
      .filter((item) => item.price >= 20000 && item.price < 45000)
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (filter === 'a45' && sortBy === 'none') {
    return data.filter((item) => item.price >= 45000);
  } else if (filter === 'a45' && sortBy === 'htl') {
    return data
      .filter((item) => item.price >= 45000)
      .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === 'a45' && sortBy === 'lth') {
    return data
      .filter((item) => item.price >= 45000)
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else {
    return data;
  }
};
