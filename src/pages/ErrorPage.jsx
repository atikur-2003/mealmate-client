import React from 'react';
import image from '../assets/images/Error.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <img className='w-72' src={image} alt="" />
            <Link to='/' className='mt-5 btn border-[#F26B21]  text-[#F26B21] hover:bg-[#F26B21] hover:text-white'>Go To Home</Link>
        </div>
    );
};

export default ErrorPage;