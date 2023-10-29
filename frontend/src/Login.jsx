import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import axiosClient from './axios';

export default function Login() {
    const [userName,setUserName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const mutation = useMutation((data) =>
        axiosClient.post("/login", data)
    );
    const submitData = () => {
        mutation.mutate({userName,email,password});
        setEmail('');
        setUserName('');
        setPassword('');
    };
    if (mutation.isLoading) {
        return <span>Submitting...</span>;
    }

    if (mutation.isError) {
        return <span>Error: {mutation.error.message}</span>;
    }

    if (mutation.isSuccess) {
        console.log('Success');
    }
    return (
        <>
            <div className='flex justify-center mt-20 '>
                <form action="" className='text-white p-10 border-2 border-white flex justify-center flex-col space-y-6 bg-white rounded-2xl'>
                    <input type="text" className='text-black  rounded-2xl p-3' name="" placeholder='Username' id="name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input type="email" className='text-black rounded-2xl p-3' placeholder='Email' name="" id="email"value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className='text-black rounded-2xl p-3' rounded-2xl p-3 placeholder='Password' name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" onClick={submitData} className='bg-blue-600 rounded-2xl p-1' value="Submit" />
                    <div className='text-black text-xs'>don't have an account &nbsp;<Link to={`/sign_up`} className='text-blue-600'>sign up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
