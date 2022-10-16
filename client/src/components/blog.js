import axios from 'axios';
import { useState, useEffect } from 'react';
const nl2br = require('nl2br');

export default function Blog() {
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'
    }

    const milk ={
        fontFamily: 'lemonmilk'
    }

    const [bloglist, updateBlogList] = useState([])
    const [currentBlog, getBlogData] = useState([])
    const [index, setIndex] = useState(0)
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [original, setOriginal] = useState([])
    useEffect(() => {
        getBlogList()
    }, [])

    const getBlogList = async () => {
        const bloglist = await fetch('http://localhost:5000/api/blogs/').then((response) => response.json()).then((responseData) => {return responseData;})
        updateBlogList(bloglist)
        getBlogData(bloglist[bloglist.length - 1])
        setIndex(bloglist.length)
        setTotalBlogs(bloglist.length)
    }

    const goBack = async () => {
        const newValue = index - 1;
        if(newValue >= 0) {
            getBlogData(bloglist[newValue])
            setIndex(newValue)
        }
    }
    const goForward = async () => {
        const newValue = index + 1;
        if(newValue <= totalBlogs - 1) {
            getBlogData(bloglist[newValue])
            setIndex(newValue)
        }
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
            <h2 style={milk}>{currentBlog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: currentBlog.blog }}></div>
            </div>
        </div>
        </>
    )
}