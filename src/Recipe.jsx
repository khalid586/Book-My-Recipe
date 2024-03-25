import React, { useState } from 'react';

function Ingredient({item,id}){
  return(
      <li className='m-1'>{item}</li>
  )
}


function Recipe({recipe,wantToCook,id}){ 
  const [btn,setBtn] = useState(false);
  const {recipe_name,short_description,calories,preparing_time,recipe_image,ingredients} = recipe;
  
  function handleButton(){
    setBtn(!btn);
  }
  return (
    <div className='p-8 m-2 border-l-4 border-b-8 shadow-lg  border-green-400 rounded-lg'>
        <div className='flex justify-center'><img className='rounded-lg' width={300} height={100} src={recipe_image} alt="react" /> </div>
        <p className='text-center text-2xl font-bold mt-4'>{recipe_name}</p>
        <p className='text-center text-gray-400 py-4'>{short_description}</p>
        { (btn && <div>
              <p className='text-xl font-bold'>Ingredients: {ingredients.length}</p>
              <div className='xl:pl-8 pl-2'>
                  {ingredients.map(item => <Ingredient id = {id} item = {item}></Ingredient>)}
              </div>
              <button onClick={handleButton} className='text-center p-2 bg-red-200 my-2 font-bold text-red-500 rounded-lg  w-full'>Show Less</button>
              <div className='flex gap-12 md:gap-16 justify-evenly my-4  py-4'>
                <p className='flex gap-2 items-center'><img width={30} src="images/clock-solid.svg" alt="" />{preparing_time} min</p>
                <p className='flex gap-2 items-center'><img width={30} src="images/fire-solid.svg" alt="time" />{calories} Calories</p>
              </div>
          </div>)
        }

        {(!btn && <div className='flex justify-center'><button onClick={handleButton} className='text-center p-2 font-bold text-blue-600 rounded-lg w-1/2'>Show Details</button></div>)}


        <div className='flex justify-center mt-4'><button onClick={() => wantToCook(recipe_name,preparing_time,calories,recipe_image)} className=' btn'>Want to cook</button></div>
    </div>
  )
}

export default Recipe