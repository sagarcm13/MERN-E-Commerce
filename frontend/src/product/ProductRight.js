import React, { useEffect, useState } from 'react'

export default function ProductRight(props) {
    const [productData, setProductData] = useState(props.data);
    useEffect(() => {
        setProductData(props.data);
    }, [props.data])
    if (productData === undefined) {
        return <div>Loading...</div>; 
    } else
        return (
            <div className='w-[60%] float-right'>
                <div className="m-3">
                    <div className='text-3xl text-white m-5 ml-10 mt-10'>{productData[0].name}</div>
                    <div className='text-4xl text-white m-5 ml-10'>₹{productData[0].price}</div>
                    <div className="text-3xl text-white ml-10 m-4 mt-10">Key features</div>
                    <ul className="box border-gray-300 list-disc mx-5 mt-10 px-10 py-5 border-2">
                        <li className="text-white text-3xl font-thin">{productData[0].features.f1}</li>
                        <li className="text-white text-3xl font-thin">{productData[0].features.f2}</li>
                        <li className="text-white text-3xl font-thin">{productData[0].features.f3}</li>
                        <li className="text-white text-3xl font-thin">{productData[0].features.f4}</li>
                    </ul>
                    <div className="btns m-10 flex justify-center">
                        <button className='bg-black m-6 text-2xl text-white p-3 rounded-xl'> Add to cart</button>
                        <button className='bg-black m-6 text-2xl text-white p-3 rounded-xl'> Buy now</button>
                    </div>
                </div>
            </div>
        )
}