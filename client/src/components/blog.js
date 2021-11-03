import axios from 'axios';
import { useState, useEffect } from 'react';
import borpa from '../assets/621.gif'

export default function Blog(){
    const val = 1
   
    const [blogs, getBlogData] = useState([])
   
    useEffect(()=>{
        getBlog()
    },[])
    
    const getBlog = async () => {
    const res = await axios.get(`https://secure-taiga-30232.herokuapp.com/api/blogs/${val}`)
    const data = res.data
    console.log(data)
    getBlogData(data)
    // const array = Array.from(data)
    // console.log(array)
    // return <h1>dfafasdf</h1>
    //fjaklfdjsklaf
    }
   
console.log(blogs)
// const date = blogs.datetime.toLocaleString();
// console.log(date)
    return(<div className='center'>
        <h2>{blogs.title}</h2>
        <h3>{blogs.datetime}</h3>
        <p>{blogs.body}</p>
        <img src={borpa} />
        </div>
    )
}