export default function intro(){
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#f0d9ff'
    }
    return (
        <div data-aos='flip-right' data-aos-duration="1500" className='header'>
            <h1>Hey, I'm Lance Bailey</h1>
            <p style={fullStack}> Full Stack Web Developer </p><p style={styles}>I'm a</p> 
        </div>
    )
}