import Card from './cards'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Github(){
    const [data, setData] = useState([{}])
    const getData = async () =>  {
        const req = await axios.get('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=lancebailey26')
        const res = req.data
        setData(res)
    }
    useEffect(() => {
        getData()
    }, [])
   
    
    console.log(data)
    
    return(
        <div className='github'>
        <CardGroup>
        <Card title={data[0].repo} language={data[0].language} link={data[0].link}/>
        <Card title={data[1].repo} language={data[1].language}/>
        </CardGroup>
        </div>
    )
    
}