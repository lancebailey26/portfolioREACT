export default function kit(){
    const styles = {
        float:'right'
    }
    const fullStack = {
        float: 'right',
        color: '#BFA2DB',
        fontWeight: 'bold'
    }
    const text = {
        textAlign: 'left',
        listStyleType:'circle'
    }
   
    return (
        <>
        <div data-aos='fade-right' data-aos-duration="1500" className='header'>
            <h1>KIT</h1>
            <p style={fullStack}> what i use on a daily basis </p> 
        </div>
        <div className="content">
            <div className='kitContainer'>
            <h2>DESKTOP</h2>
            <ul style={text}>
                <li>Keyboard: <a href='https://www.pcgamingrace.com/products/glorious-gmmk-pro-75-barebone-white'>Glorious GMMK Pro</a></li>
                    <ul>
                        <li className='sub'>an often overlooked and highly underrated part of any dev's toolkit.</li>
                    </ul>
                <li>Mouse: <a href='https://www.amazon.com/Corsair-Scimitar-Gaming-Backlit-Optical/dp/B082LRMY53?th=1'>Corsair Scimitar</a></li>
                <ul>
                        <li className='sub'>as reliable as it is versatile.</li>
                    </ul>
                <li>Microphone: <a href='https://www.amazon.com/Blue-Yeti-USB-Microphone-Silver/dp/B00N1YPXW2?th=1'>Blue Yeti Pro</a>
                <ul>
                        <li className='sub'>the perfect mic for the modern world.</li>
                    </ul>
                </li>
                <li>Headphones: <a href='https://www.amazon.com/beyerdynamic-1990-Pro-Black-Dt1990/dp/B01KM9EJ7I/'>Beyerdynamic DT 1990 Pro</a></li>
                <ul>
                        <li className='sub'>pair them with a good amp, and you'll understand why you shouldn't skimp.</li>
                    </ul>
            </ul>
            </div>

            <div className='kitContainer'>
            <h2>MOBILE</h2>
            <ul style={text}>
                <li>Laptop: <a href='https://www.apple.com/macbook-air/'>2021 MacBook Air</a></li>
                <ul>
                        <li className='sub'>light, quiet, capable. Apple nailed it with this one.</li>
                    </ul>
                <li>Headphones: <a href='https://www.apple.com/airpods-pro/'>Airpod Pros</a></li>
                <ul>
                        <li className='sub'>perfect for drowning out the noise of espresso machines at Starbucks.</li>
                    </ul>
            </ul>
            </div>

            <div className='kitContainer'>
            <h2>IDE</h2>
            <ul style={text}>
                <li>Editor: <a href='https://code.visualstudio.com/'>VSCode</a></li>
                <ul>
                        <li className='sub'>the gold standard.</li>
                    </ul>
                <li>Theme: <a href='https://vscodethemes.com/e/RobbOwen.synthwave-vscode'>Synthwave '84</a></li>
                <ul>
                        <li className='sub'>this changes a lot, but I've been feeling this theme recently.</li>
                    </ul>
            </ul>
            </div>
        </div>
        
    </>
    )
}