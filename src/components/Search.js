import { Input,Divider } from 'antd'
import React, { useState } from 'react'

export default function Search(props) {

    const [typedLetters,setTypedLetters] = useState("")

    const handleChange = (event) => {

        setTypedLetters(event.target.value)

        props.filterFoodsList(event.target.value)

    }
  return (
    
    <>

        <Divider>Search</Divider>
        <label htmlFor='search'>Search:</label>
        <Input value={typedLetters} type="text" name="search" onChange={(event) => { handleChange(event) }} />

    </>
  )
}
