import React, { useEffect, useState } from 'react'
import { useCartDetail } from './api';

export default function Cart() {
  const { data, isFetched } = useCartDetail();
  const [list, setList] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let datalist = data || [];
    datalist = datalist.map(obj => { return { ...obj, value: 1 } });
    setCartData(datalist);
  }, [isFetched]);
  useEffect(() => {
    let price = cartData.reduce((price, item) => { return price + item.price * item.value }, 0);
    setTotalPrice(price);
    let items = cartData.map((obj, i) => {
      return (
        <li className='text-white m-5 ' key={obj._id}>
          <div className="box m-5 p-5 flex border-2">
            <div className="img"><img src={obj.Images.i1} width={200} height={200} alt="" /></div>
            <div className="rigth ml-10 space-y-5">
              <div className="text-2xl text-white ">{obj.name}</div>
              <div className="text-2xl text-white ">₹{obj.price}</div>
              <div className="btn flex">
                <div className="text-2xl p-2">Qty</div>
                <button className='p-2 border-2' onClick={() => { let val = cartData.find(o => { return o._id === obj._id; }); let update = cartData.map(o => { if (o._id === obj._id) { return { ...o, value: val.value + 1 } } else return o; }); setCartData(update); }}>+</button>
                <input type="text-black" className='text-black text-center p-1' id={obj._id} name="name" value={obj.value} pattern="[0-9]" title="Title" min={1} readOnly />
                <button onClick={() => { let val = cartData.find(o => { return o._id === obj._id; }); let update = cartData.map(o => { if (o._id === obj._id) { return { ...o, value: val.value - 1 } } else return o; }); setCartData(update); }} className='p-2 border-2'>-</button>
              </div>
              <div className="btn flex justify-center space-x-10">
                <button className='border-2 rounded-lg p-2 bg-red-800' onClick={() => { let removed = cartData.filter(o => o._id !== obj._id); setCartData(removed) }}>Remove</button>
                <button className='border-2 rounded-lg p-2 bg-green-800'>Buy now</button>
              </div>
            </div>
          </div>
        </li>
      )
    });
    setList(items);
  }, [cartData]);
  return (
    <>
      <div className=' text-3xl text-center text-white'> Shopping Cart</div>
      <div className='text-2xl m-10 text-white'> Subtotal ({cartData.length} items): ₹{totalPrice} </div>
      <ol className='list-decimal'>
        {list}
      </ol>
    </>
  )
}