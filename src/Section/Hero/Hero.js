import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchAtom } from '../../atoms'
import Post from '../../Component/post/Post'
import { Audio } from 'react-loader-spinner'
import "./Hero.css"
function Hero() {
    const [blog,setBlog]=useState([])
    const[loading,setLoading]=useState(false)
    const toNav=useNavigate()
    const search=useRecoilValue(SearchAtom)
    useEffect(()=>{
      setLoading(true)
       fetch("https://dummyjson.com/product")
       .then(res=>res.json())
       .then(data=>setBlog(data.products))
       setLoading(false)
    },[])
  return (
    <>
   {loading ? 
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>:<div className='post-container' >
          
      {blog?.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())).map((item)=>
        <Post onClick={()=>toNav(`/Details/${item.id}`)} {...item} src={item.images[0]} key={item.id}/>
       
      )}
      </div>}
      </>
  )
}

export default Hero
