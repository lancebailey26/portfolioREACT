import Card from './cards'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';

export default function Github(){
    const [first, setFirst] = useState([{}]);
   // const [firstDesc, setFirstDesc] = useState({});
    const [second, setSecond] = useState({});
   // const [secondDesc, setSecondDesc] = useState({});
    const [third, setThird] = useState({});
   // const [thirdDesc, setThirdDesc] = useState({});
    const [four, setFour] = useState({});
   // const [fourDesc, setFourDesc] = useState({});
    const [isLoading, setLoading] = useState(true);
   // const [descLoad, setDescLoad] = useState(true);
    // const getDesc = async () => {
    //     const req = await axios.get('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=lancebailey26/');
    //     const first = req.data[0].description;
    //     const second = req.data[1].description;
    //     const third = req.data[2].description;
    //     const four = req.data[3].description;
    //     setFirstDesc(first)
    //     setSecondDesc(second)
    //     setThirdDesc(third)
    //     setFourDesc(four)
    //     setDescLoad(false)
        
    // }
    const getData = async () =>  {
        const req = await axios.get('https://gh-pinned-repos.egoist.sh/?username=lancebailey26');
        const first = req.data[0];
        const second = req.data[1];
        const third = req.data[2];
        const four = req.data[3];
        setLoading(false);
        setFirst(first);
        setSecond(second);
        setThird(third);
        setFour(four);
        
    }
    useEffect(() => {
        getData();
        // getDesc();
    }, []);
   
    
    // if (descLoad) {
    //     return <div className="loading center"><h1>Loading...</h1></div>;
    // }
    if (isLoading) {
        return <div className="content center"><h1>Loading...</h1></div>;
      }
      
    return(
        <div className='github'>
        <CardGroup>
        <Card title={first.repo} language={first.language} link={first.link} color={first.languageColor} image={first.image} />
        <Card title={second.repo} language={second.language} link={second.link} color={second.languageColor} image={second.image} />
        <Card title={third.repo} language={third.language} link={third.link} color={third.languageColor} image={third.image} />
        <Card title={four.repo} language={four.language} link={four.link} color={four.languageColor}image={four.image}/>
        </CardGroup>
        </div>
    )
    
}