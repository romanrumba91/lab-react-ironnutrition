import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foods from './foods.json';
import { useState } from 'react';
import Search from './components/Search';
import { Divider,Row } from 'antd';



function App() {

  const [foodsA, setFoodList]= useState(foods)
  const [foodsBackup, setFoodListBackup]= useState(foods)
  const add = newFood => {
    const addFood = [newFood, ...foodsA]
    const updateFood = [newFood,...foodsBackup]
  setFoodList(addFood)
  setFoodListBackup(updateFood)

  }

  const filterFoodsList = str => {

    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsBackup;
    } else {
      filteredFoods = foodsBackup.filter(foodsBackup => {

          return foodsBackup.name[0].toLowerCase() === str.toLowerCase();


      })
    }
    
    setFoodList(filteredFoods);

  }

  const deleteFood = name => {

    const filteredFoods = foodsBackup.filter( food => {
			return food.name !== name
		})

    setFoodListBackup(filteredFoods)
  setFoodList(filteredFoods)

  return

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
    <Search filterFoodsList={filterFoodsList} />

    <Divider>List</Divider>
    
    <Row>

    {
            
            foodsA.map((food,index)=>{
            return (
                
                <FoodBox food={food}  key={index} deleteFood={deleteFood} />
                
    
            )
      
            })
    
    
          }

    </Row>


  </>
  );
  
}

export default App;