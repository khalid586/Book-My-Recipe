// Cart.js
import React, { useContext } from 'react';
import { AssetContext } from './App';
import ToCook from './ToCook';
import Cooking from './Cooking';

function Cart() {
  const {toCook,cooking} = useContext(AssetContext); // Use useContext hook to access context
  console.log(typeof toCook)
  return (
    <>
      <div className='md:flex justify-center w-full mt-4 my-2'>
        <div className='md:w-1/3 min-h-[200px] mb-8 m-2'>
          <p className='text-center text-2xl font-bold'>Want to Cook</p>
          {toCook.length>0 ? <ToCook toCook={toCook} ></ToCook>: <p className='m-8 text-center'>Currenty Empty</p>}
        </div>
        <div className='md:w-1/3 m-2'>
          <p className='text-center text-2xl font-bold'>Cooking Items</p>
          {cooking.length?<Cooking cooking={cooking}></Cooking>:<p className='m-8 text-center'>Currenty Empty</p>}
        </div>
      </div>
    </>
    
  );
}

export default Cart;
