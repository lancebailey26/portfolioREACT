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
        color: '#31485c',
    }
    const section = {
        marginBottom: '50px'
    }
    const fullStack = {
        float: 'right',
        color: '#31485c',
        fontWeight: 'bold'
    }
    const tabs = {
        backgroundColor: '#F3F1F5'
    }
    const tabContent = {
        margin: 'auto',
        width: '90%',
        textAlign: 'center',
        color: '#31485c'
    }
    const infoResume = {
        display:'flex',
        margin: 'auto',
        justifyContent: 'space-evenly',
        textDecoration: 'none'
    }
    const infoLinks = {
        color: '#d8bfd4'
    }
    const fujiPink = {
        color: '#d8bfd4'
    }
    const blueGray = {
        color: '#31485c'
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
        // getData();

    }, []);


    if (isLoading) {
        return (
            <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1 style={blueGray}>PORTFOLIO</h1>
            <p style={fullStack}> what i'm working on </p> 
            <div className="github"><p style={styles}>Loading...</p></div>;
            </div>
        )
    }

    return (
       <div className='github box' >
            <div style={section}>
            <p style={styles}>After spending the formative years of my adult life working in the construction industry, I decided to make the jump to Web Development. <br/>
            I'm currently more focused on Front-End development, making useful and intuitive interfaces and apps.</p>
            </div>
            <div style={section}>

            <p style={styles}> Here's some relevant documents that you probably came here to see</p>
            <div style={infoResume}>
            <p style={styles}><a href={resume} style={infoLinks} target = "_blank" rel="noreferrer">Resume</a></p>
            <p style={styles}><a href={cert} style ={infoLinks} target = "_blank" rel="noreferrer">OSU Certification</a></p>

            </div>
            </div>
            <div style={section}>
            <p style={styles}>Here's some technologies that I'm familiar/working with:</p>
            <div className='tabs' style={tabs}>
            <Tabs fill style={tabs} className="mb-3">
                <Tab eventKey='meteor' title='MeteorJS'>
                    <div className='tab-content' style={tabContent}>
                        <p>MeteorJS is my current "daily driver" framework.</p>
                        <p>Built 100% in JavaScript for the Front and Back ends of development, making reactive, intuitive apps with Meteor is a real pleasure.</p>
                        <p>Learn more: <a style={fujiPink} href='https://www.meteor.com/'>Meteor.JS</a></p>
                    </div>
                </Tab>
                <Tab eventKey='react' title='React'>
                    <div className='tab-content' style={tabContent}>
                        <p>I cut my teeth in WebDev in the React framework.</p> 
                        <p>This website is built in hook based React, which I find to be a real joy to work with.</p>
                    </div>                
                </Tab>
                <Tab eventKey='mongo' title='MongoDB'>
                <div className='tab-content' style={tabContent}>
                        <p>While I do have experience with MYSQL databases, I tend to prefer the freedoms and syntax of MongoDB.</p>
                        <p>I've curated and worked with databases as large as 1.9 million entries in MongoDB.</p>
                    </div>                
                </Tab>
                <Tab eventKey='jquery' title='JQuery'>
                <div className='tab-content' style={tabContent}>
                        <p>We all love Jquery and we all hate Jquery at the same time.</p>
                        <p>It's still my favorite way to get values of inputs.</p> 
                    </div>                
                </Tab>
            </Tabs>
            </div>
            </div>
                {/* <h3 style={tabContent}>Here's some examples of projects in my Github:</h3>
                <CardGroup>
                    <Card title={first.repo} language={first.language} link={first.link} color={first.languageColor} image={first.image} />
                    <Card title={second.repo} language={second.language} link={second.link} color={second.languageColor} image={second.image} />
                    <Card title={four.repo} language={four.language} link={four.link} color={four.languageColor} image={four.image} />
                </CardGroup> */}
            </div>
    )

}