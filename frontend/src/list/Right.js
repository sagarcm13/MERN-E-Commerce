import React from 'react'

const Right = () => {
  const a= (
      <div className="float-r w-[75%] flex right-0">
        <div className="float-l w-[30%] flex justify-center m-6">
          <img className='' src="https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800" height={200} width={200} alt="" />
        </div>
        <div className="float-r w-[70%] m-6">
          <div className="desc text-white text-3xl m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolorem!</div>
          <div className="price text-white text-3xl m-2">₹50000</div>
          <button className='bg-teal-500 text-white m-2 p-2 rounded-xl'>Add to cart</button>
        </div>
      </div>
    )
    console.log(a);
    let l=[];
    for (let index = 0; index < 4; index++) {
      l.push(a);      
    }
  return (
    <>{l}</>
    // <div>
    //   <div className="float-r w-[75%] flex">
    //     <div className="float-l w-[30%] flex justify-center m-6">
    //       <img className='' src="https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800" height={200} width={200} alt="" />
    //     </div>
    //     <div className="float-r w-[70%] m-6">
    //       <div className="desc text-white text-3xl m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolorem!</div>
    //       <div className="price text-white text-3xl m-2">₹50000</div>
    //       <button className='bg-teal-500 text-white m-2 p-2 rounded-xl'>Add to cart</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Right
