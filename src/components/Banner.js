import logo from '../assets/log.png'
import '../components/styles/Banner.css'

function Banner() {
    const sub = "Welcome to the house of flowers"
    return (
        <div className='lmj-banner'>
            <div className='lmj-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
            </div>
            <h3>{sub}</h3>
        </div>
         
    )
}

export default Banner