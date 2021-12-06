export default function intro(){
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#f0d9ff',
        textShadow: '0 0 5px #000',


    }
    return (
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>Hey, I'm Lance Bailey</h1>
            <p style={fullStack}> I'm a Full Stack Web Developer </p> 
        </div>
    )
}