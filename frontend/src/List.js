import React, { useEffect, useState } from "react";
import Left from './list/Left.js';
import Right from './list/Right.js';
import { useLocation } from 'react-router-dom';

function List() {
  const {state} = useLocation();
  const  params  = state;
  const [sortBy,setSortBy]=useState('none');
  const [filter,setFilter]=useState('none');
  useEffect(()=>{
  },[sortBy,filter]);
  return (  
    <div>
      <Left setFilter={setFilter} setSortBy={setSortBy}/>
      <Right type={params.type} filter={filter} sortBy={sortBy}/>
    </div>
  )
}

export default List
