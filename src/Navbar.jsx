
'use client';

import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Component() {
  return (
    <Navbar fluid rounded className='font-custom font-bold'>
      <NavLink to = "/" className='flex'>
        <img width={20} src="images/utensils-solid.svg" alt="" />
        <span className="pl-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book My Recipe</span>
      </NavLink>
      <div className="flex md:order-2">
        <NavLink to = '/cart'  className={({isActive})=>isActive?' rounded-lg p-2 bg-yellow-200 ':' p-2'}><img width={20} src="images/cart-shopping-solid.svg" alt="" /></NavLink>

      </div>
      <Navbar className='flex  w-full lg:w-1/3 md:justify-center justify-evenly'>
        <NavLink to="/" className={({isActive})=>isActive?'text-green-500 rounded-xl p-2 bg-green-50 ':'text-black p-2'}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?'text-green-500 rounded-xl p-2 bg-green-50 ':'text-black p-2'}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?'text-green-500 rounded-xl p-2 bg-green-50':'text-black p-2'}>Contact</NavLink>
      </Navbar>
    </Navbar>
  );
}


export default Component;