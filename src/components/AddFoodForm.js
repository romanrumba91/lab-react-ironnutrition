import React, { useState } from 'react'
import { Divider, Input } from 'antd';


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

    <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input 
        name="name"
        type="text"
        value={newFood.name}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Image</label>
      <Input 
        name="image"
        type="text"
        value={newFood.image}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Calories</label>
      <Input
        name="calories"
        min={1} max={10000}
        value={newFood.calories}
        onChange={ evt => { handleChange(evt) }}
      />
      <label>Serving</label>
      <Input
        name="servings"
        min={1} max={10000}
        value={newFood.servings}
        onChange={ evt => { handleChange(evt) }}
      />
      <button type="submit">Crear platillo</button>

    </form>



      </>



  );
}
