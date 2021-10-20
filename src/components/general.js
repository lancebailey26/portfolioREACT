import cert from '../assets/cert.pdf'
import borpa from '../assets/621.gif'
export default function general(){
    return(
        <div className='content center'>
            <p>Here's my <a href={cert} target = "_blank">OSU Certification.</a></p>
            <img src={borpa}/>
        </div>
    )
}