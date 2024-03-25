import React from 'react'

function ToCookItem({item , addToCook=0}) {
    const {name,time,calories,img} = item;
    return (
        <>
            <div className='xl:flex justify-between items-center shadow-md m-2 p-4 rounded-2xl bg-red-100'>
                <img className='rounded-lg' width={80} src={img} alt="" />
                <p className='xl:w-1/5 text-sm'>{name}</p>
                <div className='py-4 xl:py-0 text-gray-400'><p>{time}</p> <p>min</p></div>
                <div className=' text-gray-400 xl:pb-0 pb-2'><p>{calories}</p> <p>Calories</p></div>
                {addToCook != 0 && <button onClick = {()=>addToCook(name,time,calories,img)} className='btn2 text-sm'>Prepare</button>}
                
            </div>
        </>
    )
}

function ToCook({toCook,addToCook=0}) {
  return (
    <table className='w-full'>
        {
            toCook.map(item => <ToCookItem addToCook = {addToCook} item = {item}></ToCookItem>)
        }
    </table>
  )
}

export default ToCook