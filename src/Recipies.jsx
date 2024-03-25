import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';

function Recipies({wantToCook}) {
    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
      fetch('./recipe.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
    },[])

    return(
        <>  
            <div className='grid md:grid-cols-2'>
                {
                    recipe.map(item => <Recipe wantToCook = {wantToCook} id = {item.recipe_id} recipe = {item}></Recipe>)
                }
            </div>
        </>
    )
}

export default Recipies