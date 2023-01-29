import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/Logo.png';

const NavMobile = () => {
    return (
        <div className='w-full flex flex-col bg-white top-0 py-2 border-b-2 lg:hidden z-10'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="logo" className='w-32' />
            </div>
            <div className='flex justify-around items-center mt-4'>
                <Link to={'/'} className='coloractive'>Home</Link>
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className='text-black coloractive'>Products</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                        <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                </Menu>
                <Link to={'/profile'} className='coloractive'>Profile</Link>
                <p className='coloractive'>Contact us</p>
            </div>
        </div>
    )
}

export default NavMobile