import Card from './cards'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import cert from '../assets/cert.pdf'
import resume from '../assets/resume.pdf'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Github() {
    const styles = {
        textAlign: 'center',
        fontFamily:'josefin',
        color: '#BFA2DB',
    }
    const gray = {
        backgroundColor: '#7F7C82'
    }
    const red ={
        color: 'red'
    }
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'
    }
    const yellow = {
        color: 'yellow'
    }
    const blue = {
        color: '#3776ab'
    }
    const orange = {
        color: 'orange'
    }
    const tabs = {
        marginBottom: '50px'
    }
    const tabContent = {
        margin: 'auto',
        width: '75%',
        textAlign: 'center'
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
        return (
            <>
            <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>PORTFOLIO</h1>
            <p style={fullStack}> what i'm working on </p> 
            </div>
        <div className="github"><p style={styles}>Loading...</p></div>;
        </>
        )
    }

    return (
        <>
        {/* <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>PORTFOLIO</h1>
            <p style={fullStack}> what i'm working on </p> 
        </div> */}
        {/* <div className='container'>
            <div className='contentContainer'>
                <div style={gray} className='technologies box' data-aos='flip-up' data-aos-duration="1500">
                <p style={styles}>Toolbelt</p>
                <ul>
                <li data-aos="fade-right" style={yellow}>JavaScript</li>
                <li data-aos="fade-left" style={blue}>React</li>
                <li data-aos="fade-left" style={yellow}>jQuery</li>
                <li data-aos="fade-left"style={red}>MySQL</li>
                <li data-aos="fade-right" style={red}>MongoDB</li>
                <li data-aos="fade-right"style={blue}>Python</li>
                <li data-aos="fade-left" style={orange}>AWS</li>
            </ul>
                </div>
                <div className='defnottech box' data-aos='flip-up' data-aos-duration="1500">
                <p style={styles}><a href={cert} target = "_blank" rel="noreferrer">OSU Certification</a></p>
                <p style={styles}><a href={resume} target = "_blank" rel="noreferrer">Resume</a></p>
                </div>
            </div>
       </div> */}
      
{/* 
            <div className='github box'  data-aos='fade-left' data-aos-duration="1500" >
          <p style={styles}> My toolbelt is an ever-expanding bottomless pit of knowledge. </p>
          <p style={styles}>    My personal favorites are React and general JavaScript. </p>
          
           <p style={styles}> This website is built in hook based React. </p>
       </div> */}

       <div className='github box' >
            <p style={styles}>After spending the formative years of my adult life working in the construction industry, I decided to make the jump to Web Development. <br/>
            I'm currently more focused on Front-End development, making useful and intuitive interfaces and apps.</p>
            <p style={styles}>Here's some technologies that I'm familiar/working with:</p>
            <div className='tabs' style={tabs}>
            <Tabs fill className="mb-3">
                <Tab eventKey='meteor' title='Meteor.js'>
                    <div className='tab-content' style={tabContent}>
                        <p>some stuff about meteor?</p> 
                    </div>
                </Tab>
                <Tab eventKey='react' title='React'>
                    <div className='tab-content' style={tabContent}>
                        <p>some stuff about react?</p> 
                    </div>                
                </Tab>
                <Tab eventKey='mongo' title='MongoDB'>
                <div className='tab-content' style={tabContent}>
                        <p>some stuff about mongodb?</p> 
                    </div>                </Tab>
                <Tab eventKey='jquery' title='JQuery'>
                <div className='tab-content' style={tabContent}>
                        <p>some stuff about jquery?</p> 
                    </div>                </Tab>
            </Tabs>
            </div>
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