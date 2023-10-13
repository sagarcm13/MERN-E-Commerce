import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Product () {
    const {state} = useLocation();
    const  params  = state;
    console.log(params);
  return (
    <div>
      <h1>product page {params.id}</h1>
    </div>
  )
}

