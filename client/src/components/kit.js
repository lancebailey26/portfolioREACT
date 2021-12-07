export default function kit(){
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'


    }
    return (
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>KIT</h1>
            <p style={fullStack}> what i use on a daily basis </p> 
        </div>
    )
}