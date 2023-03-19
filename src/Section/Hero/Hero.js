import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchAtom } from '../../atoms'
import Post from '../../Component/post/Post'
import "./Hero.css"
function Hero() {
    const [blog,setBlog]=useState([])
    const toNav=useNavigate()
    const search=useRecoilValue(SearchAtom)
    useEffect(()=>{
       fetch("https://dummyjson.com/product")
       .then(res=>res.json())
       .then(data=>setBlog(data.products))
    },[])
  return (
   
        <div className='post-container' >
      {blog?.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())).map((item)=>
        <Post onClick={()=>toNav(`/Details/${item.id}`)} {...item} src={item.images[0]} key={item.id}/>
       
      )}
      </div>
  )
}

export default Hero
