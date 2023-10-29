import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import axiosClient from './axios';

export default function SignUp() {
  const [userName,setUserName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [cpassword,setCPassword] =useState('');
    const mutation = useMutation((data) =>
        axiosClient.post("/sign_up", data)
    );
    const submitData = () => {
        mutation.mutate({userName,email,password,cpassword});
        setEmail('');
        setUserName('');
        setPassword('');
        setCPassword('');
    };
  return (
    <div className='flex justify-center mt-20 '>
      <form action="" className='text-white p-10 border-2 border-white flex justify-center flex-col space-y-6 bg-white rounded-2xl'>
          <input type="text" className='text-black  rounded-2xl p-3' name="" placeholder='Username' id="name"value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="email" className='text-black rounded-2xl p-3' placeholder='Email' name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className='text-black rounded-2xl p-3' rounded-2xl p-3  placeholder='Password'name="" id="password"value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" className='text-black rounded-2xl p-3' name=""placeholder='Confirm password' id="cpassword" value={cpassword} onChange={(e) => setCPassword(e.target.value)}/>
          <input type="submit" className='bg-blue-600 rounded-2xl p-1' value="Submit"onClick={submitData} />
          <div className='text-black text-xs'>already have an account &nbsp;<Link to={`/login`} className='text-blue-600'>sign in</Link>
          </div>
      </form>
    </div>
  )
}
