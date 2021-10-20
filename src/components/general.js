import cert from '../assets/cert.pdf'
export default function general(){
    return(
        <div className='content center'>
            <p>Here's my <a href={cert} target = "_blank">OSU Certification.</a></p>
           
        </div>
    )
}