import './Benefits.scss';
import benefits_image from '../assets/benefits-image.png';

function Benefits() {
    return (
        <section id='Benefits'>
            <div className='container'>
                <div className='cont-left'>
                    <p className='title'>Clean and fragrant soy wax</p>
                    <p className='description'>Made for your home and for your wellness</p>
                    <div>
                        <p><span>Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions.</p>
                        <p><span>Hypoallergenic:</span> 100% natural, human friendly ingredients.</p>
                        <p><span>Handmade:</span> All candles are craftly made with love.</p>
                        <p><span>Long lasting:</span> No more waste. Created to last!</p>
                    </div>
                    <button>Learn more</button>
                </div>
                <div className='cont-right'>
                    <img className="benefits-img" src={benefits_image} alt="benefits image" />
                </div>
            </div>
        </section>
    );
}

export default Benefits