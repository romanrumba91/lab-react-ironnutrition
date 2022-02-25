import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foods from './foods.json';
import { useState } from 'react';



function App() {

  const [foodList, setFoodList]= useState(foods)
  const add = (newFood) => {
    const prueba = [...foodList,newFood]

  setFoodList(prueba)
  }

  return (

     <>     
      
      {/* {
        foodList.map((food, index) => {

          return(
            <div>
              <p> {food.name} </p>
              <img src={food.image} width={100} />
            </div>
          )
        })
      
      }

      <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
      }} />

    {
      foods.map((arr,index)=>{
        return <FoodBox food={arr} />
      })
    }  */}

    <AddFoodForm add={add}/>

    <h1>Listado</h1>

        {
            
        foodList.map((arr,index)=>{
        return (
            <div key={index}>
            <FoodBox food={arr} />
            </div>

        )
  
})



}

    </> 
  );
  
}

export default App;