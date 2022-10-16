export default function intro(){
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'


    }
    return (
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>Hey, I'm Lance Bailey</h1>
            <p style={fullStack}> I'm a Full Stack Web Developer </p> 
        </div>
    )
}