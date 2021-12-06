import cert from '../assets/cert.pdf'
import resume from '../assets/resume.pdf'
export default function general(){
    return(
        <div className='content'>
            <div className='contentContainer'>
            <div  data-aos="flip-up"  data-aos-duration="1500" className='technologies box'>
            <ul>
                <li> things i like </li>
                <br/>
                <li data-aos="fade-right">JavaScript</li>
                <li data-aos="fade-left">jQuery</li>
                <li data-aos="fade-right">HTML/CSS</li>
                <li data-aos="fade-left">MySQL</li>
                <li data-aos="fade-right">MongoDB</li>
                <li data-aos="fade-left">React</li>
                <li data-aos="fade-right">Python</li>
                <li data-aos="fade-left">AWS</li>
            </ul>
            </div>
            
            <div data-aos="flip-up"  data-aos-duration="1500" className='defnottech box'>
                <p><a href='https://open.spotify.com/user/12131896438'>Spotify</a></p>
            <iframe className='playlist' src="https://open.spotify.com/embed/playlist/0M94woUpkj37XYSWFtXYV3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>            </div>
            </div>
            <p>Here's my <a href={cert} target = "_blank">OSU Certification.</a></p>
            <p>Here's a copy of <a href={resume} target = "_blank">my Resume.</a></p>
        </div>
    )
}