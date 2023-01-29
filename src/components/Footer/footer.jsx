import React from 'react'
import Logo from '../../image/Logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f9f9f9' }} className='w-full h-max bg-green-100 py-10 px-10 lg:flex justify-around items-start hidden'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="logo" className='w-16' />
                <div className='flex flex-col items-center'>
                    <p style={{ color: '#282828' }} className='font-extrabold text-lg'>Louei LTD</p>
                    <p className='lg:ml-3 -mt-1 text-black'>Read & Enjoy</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-black text-left text-2xl font-bold'>
                    Contact Us
                </p>
                <div className='w-20 h-2 mt-4 rounded-xl' style={{ backgroundColor: '#4fd6f7', color: '#4fd6f7' }}></div>
                <div className='flex items-center text-left mt-3'>
                    <p className='font-semibold text-black'>Address:</p>
                    <p className='text-black text-sm ml-2'>2 Fredrick Street, Kings Cross, London, WC1X0ND, UNITED KINGDOM</p>
                </div>
                <div className='text-left mt-3'>
                    <p className='font-semibold text-black'>Phone:</p>
                    <p></p>
                </div>
                <div className='text-left mt-3'>
                    <p className='font-semibold text-black'>Fax:</p>
                    <p></p>
                </div>
                <div className='text-left mt-3 flex items-center'>
                    <p className='font-semibold text-black'>Email:</p>
                    <p className='text-black ml-2'>Support@loueiacademy.com</p>
                </div>
                <div className='flex justify-between mt-4 w-3/12'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 10.3703C15.1234 11.2025 14.9812 12.0525 14.5937 12.7993C14.2062 13.5461 13.5931 14.1517 12.8416 14.53C12.0901 14.9082 11.2384 15.0399 10.4077 14.9062C9.57708 14.7726 8.80971 14.3804 8.21479 13.7855C7.61987 13.1905 7.22768 12.4232 7.09402 11.5925C6.96035 10.7619 7.09202 9.9102 7.47028 9.15868C7.84854 8.40716 8.45414 7.79404 9.20094 7.40654C9.94773 7.01904 10.7977 6.87689 11.63 7.0003C12.4789 7.12619 13.2648 7.52176 13.8716 8.12861C14.4785 8.73545 14.8741 9.52138 15 10.3703Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.5 5.5H16.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.11996 4 3.39996 4.46C2.92921 4.59318 2.50194 4.84824 2.16131 5.19941C1.82068 5.55057 1.57875 5.98541 1.45996 6.46C1.14518 8.20556 0.991197 9.97631 0.999961 11.75C0.988741 13.537 1.14273 15.3213 1.45996 17.08C1.59092 17.5398 1.83827 17.9581 2.17811 18.2945C2.51794 18.6308 2.93878 18.8738 3.39996 19C5.11996 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1792 17.9094 22.4212 17.4746 22.54 17C22.8523 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 15.0205L15.5 11.7505L9.75 8.48047V15.0205Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-black text-2xl font-bold'>
                    Important Link
                </p>
                <div className='w-20 h-2 mt-4 rounded-xl' style={{ backgroundColor: '#4fd6f7', color: '#4fd6f7' }}></div>
                <div className='text-left mt-3'>
                    <p className='font-semibold text-black'>Legal</p>
                    <p></p>
                </div>
                <div className='text-left mt-3'>
                    <p className='font-semibold text-black'>Terms And Condition</p>
                    <p></p>
                </div>
                <div className='text-left mt-3'>
                    <p className='font-semibold text-black'>Refund Policy</p>
                    <p></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer