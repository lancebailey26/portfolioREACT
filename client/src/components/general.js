import cert from '../assets/cert.pdf'
import resume from '../assets/resume.pdf'
export default function general(){
    return(
        <div className='content'>
            <div className='container'>
            <div  data-aos="flip-up"  data-aos-duration="3000" className='technologies'>
            <ul>
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
            <div className='nottech'>
            <p>fdjaklfsdjaklfjklasdfjaskljfklfdsfsda
            fdsafdsafdsafdasf sdafsdafsda fsdafsdaf dsaf</p>
            </div>
            <div className='defnottech'>
                <p>xczczxczxcxzczczx</p>
            </div>
            </div>
            <p>Here's my <a href={cert} target = "_blank">OSU Certification.</a></p>
            <p>Here's a copy of <a href={resume} target = "_blank">my Resume.</a></p>
        </div>
    )
}