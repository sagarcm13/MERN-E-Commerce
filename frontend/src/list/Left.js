import React from 'react'

export default function Left({setFilter,setSortBy}) {

  const setPrice=(e)=>{
    setFilter(e.target.value);
  }
  const settingSort=(e)=>{
    // console.log(e.target.value);
    setSortBy(e.target.value);
  }
  return (
    <div className="float-left w-[25%] space-y-16">
        <div className="sort text-white flex flex-col space-y-5 m-5">
          <label htmlFor="Sort" className='text-center'>Sort By</label>
          <select name="Sort" className='bg-black mx-16 text-center rounded-2xl p-3' id="sort" onChange={settingSort}>
            <option value="none">Price</option>
            <option value="htl">Price(highest to low)</option>
            <option value="lth">Price(lowest to high)</option>
          </select>
        </div>
        <div className="filter text-white flex flex-col space-y-5 m-5 float-none justify-center text-center" >
          <label htmlFor="filter" className='text-center'>Filter By</label>
          <select name="Sort" className='bg-black mx-16 text-center rounded-2xl p-3' id="sort" onChange={setPrice}>
            <option value="none">All Range</option>
            <option value="b20">below 20,000</option>
            <option value="20-45">20,000 to 45,000</option>
            <option value="a45">45,000 and above</option>
          </select>
        </div>
      </div>
  )
}
