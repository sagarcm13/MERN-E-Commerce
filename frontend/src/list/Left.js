import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Left extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <div>
        <div className="float-left w-[25%] space-y-16">
          <div className="sort text-white flex flex-col space-y-5 m-5">
            <label htmlFor="Sort" className='text-center'>Sort By</label>
            <select name="Sort" className='bg-black mx-16 text-center rounded-2xl p-3' id="sort">
              <option value="none">Price</option>
              <option value="htl">Price(highest to low)</option>
              <option value="lth">Price(lowest to high)</option>
            </select>
          </div>
          <div className="filter text-white flex flex-col space-y-5 m-5 float-none justify-center text-center">
            <label htmlFor="Sort" className='text-center'>Filter By</label>
            <select name="Sort" className='bg-black mx-16 text-center rounded-2xl p-3' id="sort">
              <option value="none">All Range</option>
              <option value="b20">below 20,000</option>
              <option value="2-45">20,000 to 45,000</option>
              <option value="a45">45,000 and above</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Left
