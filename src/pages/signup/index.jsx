import { Input } from '@material-tailwind/react';
import React from 'react'
import Logo from '../../image/Logo.png';

const SignUp = () => {
    return (
        <div style={{ height: '100vh' }} className='flex justify-center items-center w-full py-4'>
            <div className='flex flex-col w-4/12 shadow-md rounded-2xl py-5 px-3'>
                <div className='flex justify-center items-center'>
                    <img src={Logo} width={150} alt="" />
                </div>
                <p className='text-xl text-black text-center font-normal mt-4'>
                    Sign Up
                </p>
                <div className='mt-4'>
                    <Input
                        size="lg" 
                        label="First Name" 
                    />
                </div>
                <div className='mt-4 '>
                    <Input
                        size="lg"
                        label="Last Name"
                    />
                </div>
                <div className='mt-4 '>
                    <Input
                        size="lg"
                        label="Phone Number"
                    />
                </div>
                <div className='mt-4 '>
                    <Input
                        size="lg"
                        label="Password"
                    />
                </div>
                <button style={{ backgroundColor: '#4fd6f7' }} className='px-2 py-1 mt-4 text-white rounded-md'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SignUp