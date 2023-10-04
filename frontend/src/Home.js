import React, { Component } from 'react'
import Slider from './home/Slider.js'
import TypeOfProduct from './home/TypeOfProduct.js'
export class Home extends Component {
  render() {
    return (
      <div>
        <Slider></Slider>
        <TypeOfProduct></TypeOfProduct>
      </div>
    )
  }
}

export default  Home
