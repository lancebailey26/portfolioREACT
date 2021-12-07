import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Blog() {
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'
    }

    const milk ={
        fontFamily: 'lemonmilk'
    }

    const [blogs, getBlogData] = useState([])
    const [total, setTotal] = useState(0)
    const [original, setOriginal] = useState([])
    useEffect(() => {
        getBlog()
    }, [])


    const getBlog = async () => {
        const bloglist = await axios.get('https://lancebailey.tech/api/blogs/')
        const val = bloglist.data.length
        const res = await axios.get(`https://lancebailey.tech/api/blogs/${val}`)
        const data = res.data
        setOriginal(val)
        getBlogData(data)
        setTotal(val)

    }
    const goBack = async () => {
        const newValue = total - 1;
        const res = await axios.get(`https://lancebailey.tech/api/blogs/${newValue}`)
        const data = res.data
        getBlogData(data)
        setTotal(newValue)
    }
    const goForward = async () => {
        const newValue = total + 1;
        const res = await axios.get(`https://lancebailey.tech/api/blogs/${newValue}`)
        const data = res.data
        getBlogData(data)
        setTotal(newValue)
    }

    return (<>
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
        <h1>BLOG</h1>
        <p style={fullStack}> where i write about tech and life </p> 
        </div>

        <div className='blog'>
            <button id='forward' onClick={goForward}> Next</button>
            <button id='backward' onClick={goBack}> Back </button>
           <div data-aos="flip-up" data-aos-duration="1500" className='blogContent'>
            <h2 style={milk}>{blogs.title}</h2>
            <h3>{blogs.datetime}</h3>
            <p>{blogs.para1}</p>
            <p>{blogs.para2}</p>
            <p>{blogs.para3}</p>
            </div>
        </div>
        </>
    )
}