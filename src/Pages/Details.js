import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id}=useParams()
    const[blog,setBlog]=useState("")
    const[imageArr,setImageArr]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/product/"+id)
        .then(res=>res.json())
        .then(data=>{
            setBlog(data)
            setImageArr(data.images)})
     },[id])
  return (
    
    <div>

{console.log(imageArr)}
      {blog.title}
      {blog.description}
      {imageArr?.map((x,i)=>{
         return(
        <img src={x} alt="example"/>
      )})}
    </div>
  )
}

export default Details
