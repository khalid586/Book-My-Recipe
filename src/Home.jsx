import { createContext, useContext, useEffect, useState } from 'react'
import Recipies from './Recipies'
import ToCook from './ToCook'
import Cooking from './Cooking'
import { ChakraProvider } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import Component from './Navbar'
import Banner from './Banner'
import Cart from './Cart'
import { AssetContext } from './App'



function Home() {
    const {toCook,setToCook} = useContext(AssetContext);
    const {cooking,setCooking}= useContext(AssetContext)
    const toast = useToast();
  
    const [tTime,setTTime] = useState(0);
    const [tCalories,setTCalories] = useState(0);
  
    function  calculate(time,calories){
      setTCalories(tCalories + parseInt(calories));
      setTTime(tTime + parseInt(time));
    }

  
    function DoneCooking(name){
      let time = 0 , calories = 0;
  
      cooking.forEach(item => {
        if(item.name === name){
        calories = parseInt(item.calories);
        time = parseInt(item.time);
        calories *= item.count;
        time *= item.count;
      }})
  
      const Curr = cooking.filter(item => item.name != name);
      setCooking(Curr);
  
      calculate(-time,-calories);
    }
  
    function Toast(title,status,duration){
      toast({
        title: title,
        status: status,
        duration: duration,
        isClosable: true,
        position: 'top',
      });
    }
  
    function wantToCook(name,time,calories,recipe_image){
  
      if (toCook.find(item => item.name === name)) {
        // Show toast notification when item already exists
        Toast('Item already added!','error',3000)
        return;
      }
  
      Toast('Item added successfully!','success',1000)
  
      const order = {
        name : name,
        time : time,
        calories: calories,
        img:recipe_image
      }
      const newOrder = [...toCook,order];
      setToCook(newOrder);
    }
  
    function addToCook(name,time,calories,img){
        const newList = toCook.filter(item => item.name != name);
        setToCook(newList);
    
        let count = 1;
    
        const order = {
          name : name,
          time : time,
          calories: calories,
          img:img,
          count: count,
        }
        
        if(cooking.find(item => item.name == name)){
          cooking.map(item => item.name == name?item.count++:1);
        }else{
          const nowCooking = [...cooking,order];
          setCooking(nowCooking);
      }
  
      calculate(time,calories);
  
    }
  
    return (
      <ChakraProvider>
        <div className='font-custom'>
        <Banner></Banner>

        
        <div className='m-8'>
            <h1 id = "our-recipies"className='text-4xl  font-extrabold text-center'>Our Recipies</h1>
            <p className='py-2 font-semibold text-center text-gray-400'>Delicious and nutritious recipe featuring fresh ingredients, bursting with flavor and guaranteed to satisfy any palate.</p>
        </div>
  
        <div id = "recipies" className='xl:flex justify-evenly m-4'>
            <Recipies wantToCook = {wantToCook}></Recipies>
  
            <div id = "orders" className='xl:w-1/2 p-2 rounded-xl m-2'>
                <p className='text-center text-3xl mt-2 mb-4 font-bold'>Want to cook: {toCook.length}</p>
                
                <div id = "cookLater" className='table-fixed p-4 font-semibold'>
                  <ToCook toCook = {toCook} addToCook =  {addToCook}></ToCook>
                </div>
  
                <p className='text-center text-3xl mt-32 mb-8 font-bold'>Currently cooking: {cooking.length}</p>
                
                <div id = "currentCooking">
                  <Cooking DoneCooking = {DoneCooking} cooking = {cooking}></Cooking>
                </div>
  
                <p className='text-2xl mt-16 text-center font-bold'>Total Time : <span className='text-red-500'>{tTime} minutes</span> </p>
                <p className='text-2xl mt-4 text-center font-bold'> Total Calories : <span className='text-green-500'>{tCalories} Calories</span></p>
                
            </div>
        </div>

      </div>
    </ChakraProvider>
      
    )
}

export default Home