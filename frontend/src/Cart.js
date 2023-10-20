import React, { useEffect, useState } from 'react'
import { useCartDetail } from './api';

export default function Cart() {
  const { data, isFetched } = useCartDetail();
  const [list, setList] = useState([]);
  useEffect(() => {
    let cartData = data || [];
    cartData = cartData.map(obj => {
      return { ...obj, value: 1 };
    })
    let items = cartData.map((obj, i) => {
      return (
        <li className='text-white m-5 '>
          <div className="box m-5 p-5 flex border-2">
            <div className="img"><img src={obj.Images.i1} width={200} height={200} alt="" /></div>
            <div className="rigth ml-10 space-y-5">
              <div className="text-2xl text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis asperiores, dolore tempore ullam quod!</div>
              <div className="text-2xl text-white ">5000</div>
              <div className="btn flex space-x-20">
                <div className="btn">Qty 
                <button className='p-2 border-2' onClick={() => { document.getElementById(obj._id).value++; }}>+</button><input type="text-black" className='text-black text-center p-1' id={obj._id} name="name" value={obj.value} pattern="[0-9]" title="Title" min={1} /><button onClick={() => { document.getElementById(obj._id).value--; }} className='p-2 border-2'>-</button></div>
                <button className='border-2 rounded-lg p-2 bg-red-800'>Remove</button>
              </div>
            </div>
          </div>
        </li>
      )
    });
    setList(items);
  }, [isFetched]);
  return (
    <>
      <div className=' text-3xl text-center text-white'> Shopping Cart</div>
      <div className='text-2xl m-10 text-white'> Subtotal (10 items): 20000 </div>
      <ol className='list-decimal'>
        {list}
      </ol>
    </>
  )
}
