import React, { useEffect, useState } from 'react'
import Post from '../../Component/post/Post'
import "./Hero.css"
function Hero() {
    const [blog,setBlog]=useState()
    useEffect(()=>{
       fetch("https://dummyjson.com/product")
       .then(res=>res.json())
       .then(data=>setBlog(data.products))
    },[])
  return (
   
        <div className='post-container' >
      {blog?.map((item,i)=>
        <Post {...item} src={item.images[0]} key={i}/>
       
      )}
      </div>
  )
}

export default Hero
