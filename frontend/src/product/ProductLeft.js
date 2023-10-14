import React, { useState, useEffect } from 'react'

export default function ProductLeft(props) {
  const [productData, setProductData] = useState(props.data);
  useEffect(() => {
    setProductData(props.data);
  }, [props.data])
  if (productData === undefined) {
    return <div>Loading...</div>;
  } else
    return (
      <div className='w-[40%] float-left'>
        <div className="m-8">
          <img className='ml-8 w-[500px] h-auto' id='mainImg' src={productData[0].Images.i1} alt="" />
        </div>
        <div className="flex m-5 space-x-16">
          <div className="border-2 m-2 flex justify-center">
            <img className='w-[220px] h-auto mt-5 cursor-pointer' id='smallImg1' src={productData[0].Images.i1} onClick={() => {
              document.getElementById('mainImg').src = document.getElementById('smallImg1').src
            }} alt="" />
          </div>
          <div className="border-2 m-2 flex justify-center">
            <img className='w-[220px] h-auto mt-5 cursor-pointer' id='smallImg2' src={productData[0].Images.i2} onClick={() => {
              document.getElementById('mainImg').src = document.getElementById('smallImg2').src
            }} alt="" />
          </div>
          <div className="border-2 m-2 flex justify-center">
            <img className='w-[220px] h-auto mt-5 cursor-pointer' id='smallImg3' src={productData[0].Images.i3} onClick={() => {
              document.getElementById('mainImg').src = document.getElementById('smallImg3').src
            }} alt="" />
          </div>
          <div className="border-2 m-2 flex justify-center">
            <img className='w-[220px] h-auto mt-5 cursor-pointer' id='smallImg4' src={productData[0].Images.i4} onClick={() => {
              document.getElementById('mainImg').src = document.getElementById('smallImg4').src
            }} alt="" />
          </div>
        </div>
      </div>
    )
}
