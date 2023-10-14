import React, { useEffect, useState } from 'react'
import { useProducts } from '../api';
import { Link } from 'react-router-dom'

export default function Right(props) {
  const { data, isFetched } = useProducts(props.type)
  const [u, setU] = useState([]);
  useEffect(() => {
    let productData = data || [];
    productData = applingFilter(productData, props.filter, props.sortBy);
    const x = []
    if (productData.length > 0) {
      for (let index = 0; index < productData.length; index++) {
        let b = (<li className='' id={productData[index]._id}>
          <div className='flex border-white border-2 border-r-0'>
            <div className="float-l w-[30%] flex justify-center m-6">
              <img src={productData[index].Images.i1} height={200} width={200} alt="" />
            </div>
            <div div className="float-r w-[70%] m-6"><Link to='/product' state={{ id: productData[index]._id }}>
              <div className="desc text-white text-3xl m-2">{productData[index].name}</div>
              <div className="price text-white text-3xl m-2">₹{productData[index].price}</div></Link>
              <button className='bg-teal-500 text-white m-2 p-2 rounded-xl'>Add to cart</button>
            </div>
          </div>
        </li>)
        x.push(b);
      }
    }
    setU(x)
  }, [data, props.filter, props.sortBy])
  if (!isFetched) {
    return <div>Loading...</div>;
  }
  return (u &&
    <>
      <div className='float-r w-[75%] flex '>
        <ul className="flex-col w-[100%]">
          {u}
        </ul>
      </div>
    </>
  )
};
const applingFilter = (data, filter, sortBy) => {
  if (filter === 'none' && sortBy === 'none') {
    return data;
  } else if (filter === 'none' && sortBy === 'htl') {
    return data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  else if (filter === 'none' && sortBy === 'lth') {
    return data.sort((a, b) => {return a.price - b.price;});
  }
  else if (filter === 'b20' && sortBy === 'none') {
    return data.filter((item)=>{return item.price<20000});
  }
  else if (filter === 'b20' && sortBy === 'htl') {
    return data.filter((item)=>{return item.price<20000}).sort((a, b) => parseFloat(b.price) - parseFloat(a.price));;
  }
  else if (filter === 'b20' && sortBy === 'lth') {
    return data.filter((item)=>{return item.price<20000}).sort((a, b) => {return a.price - b.price;});
  }
  else if (filter === '20-45' && sortBy === 'none') {
    return data.filter((item)=>{return (item.price>=20000 && item.price<45000)});
  }
  else if (filter === '20-45' && sortBy === 'htl') {
    return data.filter((item)=>{return (item.price>=20000 && item.price<45000)}).sort((a, b) => parseFloat(b.price) - parseFloat(a.price));;
  }
  else if (filter === '20-45' && sortBy === 'lth') {
    return data.filter((item)=>{return (item.price>=20000 && item.price<45000)}).sort((a, b) => {return a.price - b.price;});
  }
  else if (filter === 'a45' && sortBy === 'none') {
    return data.filter((item)=>{return item.price>45000});
  }
  else if (filter === 'a45' && sortBy === 'htl') {
    return data.filter((item)=>{return item.price>45000}).sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  else if (filter === 'a45' && sortBy === 'lth') {
    return data.filter((item)=>{return item.price>45000}).sort((a, b) => {return a.price - b.price;});
  }
  else return data;
}