import React from 'react'
import { nanoid } from "nanoid"
import { useState } from 'react'
// import foods from './foods.json';
// import FoodBox from './components/FoodBox';


export default function AddFoodForm(props) {

    const [newFood, setNewFood] = useState({
        name:'',
        image:'',
        calories:'',
        servings:''
      })
      // const [foodList, setFoodList]= useState(foods)
      const [error, setError] = useState("")
     
      const handleChange = (event) => {
            setNewFood({
                ...newFood, // spread operator ES6+ - Object Assign
                id: nanoid(),
                 [event.target.name]: event.target.value
            })
        }
    
      const handleSubmit = (event) => {
            
            event.preventDefault() // DETENER LA RECARGA DE PÁGINA
    
            if(!newFood.name || !newFood.image || !newFood.calories || !newFood.servings) {
    
                setError("Existe un campo vacío. Por favor, verifica nuevamente.")
    
                return
            }

            props.add(newFood)
            // setFoodList([
            //     ...foodList,
            //     newFood
            // ])

            setNewFood({
          name:'',
          image:'',
          calories:'',
          servings:''
            })
    
            setError("")
    
        }
  return (
  
    <>
    <form onSubmit={(evt) =>{handleSubmit(evt)}}>

      <label>Name</label>
      <input 
        name="name"
        value={newFood.name}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Image</label>
      <input 
        name="image"
        value={newFood.image}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Calories</label>
      <input 
        name="calories"
        value={newFood.calories}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Serving</label>
      <input 
        name="servings"
        value={newFood.servings}
        onChange={ evt => { handleChange(evt) }}
      />
      <button type="submit">Crear platillo</button>

      <p>{ error }</p>

    </form>


      </>



  );
}
