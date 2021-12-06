export default function kit(){
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#f0d9ff',
        textShadow: '0 0 5px #000'


    }
    return (
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>KIT</h1>
            <p style={fullStack}> what i use on a daily basis </p> 
        </div>
    )
}