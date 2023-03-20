import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"
import { Audio } from 'react-loader-spinner'
function Details() {
    const {id}=useParams()
    const[blog,setBlog]=useState("")
    const[imageArr,setImageArr]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://dummyjson.com/product/"+id)
        .then(res=>res.json())
        .then(data=>{
            setBlog(data)
            setImageArr(data.images)})
            setLoading(false)
     },[id])
  return (
    
    <div>
      <div className='title'> 
      <div><b>Title-</b>{blog.title}</div>
      <div><b>Detail-</b>{blog.description}</div>
      </div>
      {loading ? <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>:
      <div className='img-container'>
      {imageArr?.map((x,i)=>{
         return(
        
        <img key={i} src={x} alt="example" height="300"/>
        
      )})}</div>}
    </div>
  )
}

export default Details
