import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Left from './list/Left.js';
import Right from './list/Right.js';
export class List extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <div>
        <Left />
        <Right />
      </div>
    )
  }
}

export default List
