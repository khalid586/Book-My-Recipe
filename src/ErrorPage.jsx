import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


function ErrorPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col  justify-center items-center min-h-[500px] text-4xl font-bold text-red-500'><p>Oops ! You are in the wrong place!</p><Link to = "/" className='btn text-xl m-4'>Return to home</Link></div>
      
    </>
  )
}

export default ErrorPage