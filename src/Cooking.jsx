import React from 'react'

function CookingItem({item, DoneCooking = 0}) {
    const {name,time,calories,img,count} = item;
    return (
        <>
            <div className='font-bold xl:flex justify-between items-center m-2 p-4 rounded-2xl bg-green-100 shadow-md'>
                <img className='rounded-lg' width={80} src={img} alt="" />
                <p className='xl:w-1/3 text-sm'>{name} <sup className={`text-xs text- px-1 ${count>1?'bg-green-400 text-white':0} rounded-full`}>{count > 1 && count}</sup> </p>
                <div className='py-4 xl:py-0 text-gray-400'><p>{time * count}</p> <p>min</p></div>
                <div className=' text-gray-400 xl:pb-0 pb-2'><p>{calories * count}</p> <p>Calories</p></div>
                {DoneCooking != 0 && <button onClick={()=>DoneCooking(name)} className='btn text-sm'>Done</button>}
            </div>
        </>
    )
}

function Cooking({cooking,DoneCooking = 0}) {
  return (
    <>
        <table className='w-full'>
            {
                cooking.map(item => <CookingItem item = {item} DoneCooking = {DoneCooking}></CookingItem>)
            }
        </table>
    </>
  )
}

export default Cooking