export default function intro(){
    const styles = {
        float:'right'
    }
    return (
        <div data-aos='flip-right' data-aos-duration="3000" className='header'>
            <h1>Hey, I'm Lance Bailey</h1>
            <h2 style={styles}
            >I'm a Full Stack Web Developer</h2>
        </div>
    )
}