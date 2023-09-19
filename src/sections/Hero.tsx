import './Hero.scss'
import x_image from '../assets/Hero/x-hero-image.png'
import y_image from '../assets/Hero/y-hero-image.png'

function Hero() {
    return (
        <section id='Hero'>
            <img className="hero-img-x" src={x_image} alt="bg image" />
            <img className="hero-img-y" src={y_image} alt="bg image" />
            <div className='center-container'>
                <div className='text-cont'>
                    <p className='title-icon'>🌱</p>
                    <p className='title'>The nature candle</p>
                    <p className='description'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments</p>
                </div>
                <button>Discover our collection</button>
            </div>
        </section>
    );
}

export default Hero