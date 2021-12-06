import Card from './cards'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';

export default function Github() {
    const styles = {
        textAlign: 'center',
        fontFamily: 'Lora',
    }
    
    const [first, setFirst] = useState([{}]);
    const [second, setSecond] = useState({});
    const [third, setThird] = useState({});
    const [four, setFour] = useState({});
    const [isLoading, setLoading] = useState(true);

    const getData = async () => {
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

    }, []);


    if (isLoading) {
        return <div className="github"><p style={styles}>Loading...</p></div>;
    }

    return (
        <>
            <div className='github'>
                <p style={styles}>Here are some of my favorite github projects:</p>
                <CardGroup>
                    <Card title={first.repo} language={first.language} link={first.link} color={first.languageColor} image={first.image} />
                    <Card title={second.repo} language={second.language} link={second.link} color={second.languageColor} image={second.image} />
                    <Card title={third.repo} language={third.language} link={third.link} color={third.languageColor} image={third.image} />
                    <Card title={four.repo} language={four.language} link={four.link} color={four.languageColor} image={four.image} />
                </CardGroup>

            </div>
        </>
    )

}