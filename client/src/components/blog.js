import axios from 'axios';
import { useState, useEffect } from 'react';
import borpa from '../assets/621.gif'

export default function Blog(){
    
   
    const [blogs, getBlogData] = useState([])
   
    useEffect(()=>{
        getBlog()
    },[])
    
    const getBlog = async () => {   
    // these are development
    // const bloglist = await axios.get('http://localhost:3001/api/blogs')
    // const val = bloglist.data.length
    // const res = await axios.get(`http://localhost:3001/api/blogs/${val}`)
    // console.log(bloglist)
    
    // these are production routes

    const bloglist = await axios.get('https://secure-taiga-30232.herokuapp.com/api/blogs/')
    const val = bloglist.data.length
    const res = await axios.get(`https://secure-taiga-30232.herokuapp.com/api/blogs/${val}`)
    
    const data = res.data
    console.log(data)
    getBlogData(data)

    }
   
console.log(blogs)

    return(
        <div className='blog center'>
        <h2>{blogs.title}</h2>
        <h3>{blogs.datetime}</h3>
        <p>{blogs.para1} </p>
        <p>{blogs.para2} </p>
        <p> {blogs.para3} </p>
        <img src={borpa} />
        </div>
    )
}