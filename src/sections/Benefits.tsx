import './Benefits.scss';
import benefits_image from '../assets/benefits-image.png';
import { AiOutlineCheckCircle } from "react-icons/ai";

function Benefits() {
    return (
        <section id='Benefits'>
            <div className='container'>
                <div className='cont-left'>
                    <p className='title'>Clean and fragrant soy wax</p>
                    <p className='description'>Made for your home and for your wellness</p>
                    <ul>
                        <li><AiOutlineCheckCircle /><span className='li-tag'>Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions.</li>
                        <li><AiOutlineCheckCircle /><span className='li-tag'>Hypoallergenic:</span> 100% natural, human friendly ingredients.</li>
                        <li><AiOutlineCheckCircle /><span className='li-tag'>Handmade:</span> All candles are craftly made with love.</li>
                        <li><AiOutlineCheckCircle /><span className='li-tag'>Long lasting:</span> No more waste. Created to last!</li>
                    </ul>
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