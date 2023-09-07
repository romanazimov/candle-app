import './Hero.scss'
import bg_image from '../assets/bg-image.png'

function Hero() {
    return (
        <section id='Hero'>
            <img className="hero-img" src={bg_image} alt="bg image" />
            <div className='center-container'>
                <div>
                    <p>The nature candle</p>
                    <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments</p>
                </div>
                <button>Discover our collection</button>
            </div>
        </section>
    );
}

export default Hero