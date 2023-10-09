import './Footer.scss';
import footer_logo from '../assets/Footer/footer-logo.png';

function Footer() {
    return (
        <footer id='Footer'>
            <div className='container'>
                <div className='left-cont'>
                    <img className='footer-logo' src={footer_logo} alt="footer logo" />
                    <p>Your natural candle made for your home and for your wellness.</p>
                </div>
                <div className='right-cont'>
                    <div className='link-section'>
                        <p className='section-title'>SHOP</p>
                        <p className='link'>Candles</p>
                        <p className='link'>Subscriptions</p>
                        <p className='link'>Bestsellers</p>
                        <p className='link'>Gift Cards</p>
                    </div>
                    <div className='link-section'>
                        <p className='section-title'>SUBSCRIBE</p>
                        <p className='link'>Candle of the Month</p>
                        <p className='link'>Random Club</p>
                        <p className='link'>Subscription FAQ</p>
                    </div>
                    <div className='link-section'>
                        <p className='section-title'>DISCOVER</p>
                        <p className='link'>About Us</p>
                        <p className='link'>Sustainability</p>
                        <p className='link'>What's my scent persona?</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer