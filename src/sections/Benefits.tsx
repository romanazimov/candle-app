import './Benefits.scss';
import benefits_image from '../assets/Benefits/benefits-image.png';
import { AiOutlineCheckCircle } from "react-icons/ai";

function Benefits() {
    return (
        <section id='Benefits'>
            <div className='container'>
                <div className='upper-header'>
                    <p className='title'>Clean and fragrant soy wax</p>
                    <p className='description'>Made for your home and for your wellness</p>
                </div>
                <div className='split-container'>
                    <div className='cont-left'>
                        <div className='left-header'>
                            <p className='title'>Clean and fragrant soy wax</p>
                            <p className='description'>Made for your home and for your wellness</p>
                        </div>
                        <ul>
                            <li>
                                <div className='li-cont'>
                                    <div>
                                        <AiOutlineCheckCircle className='bullet' />
                                    </div>
                                    <div>
                                        <b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='li-cont'>
                                    <div>
                                        <AiOutlineCheckCircle className='bullet' />
                                    </div>
                                    <div>
                                        <b>Hypoallergenic:</b> 100% natural, human friendly ingredients.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='li-cont'>
                                    <div>
                                        <AiOutlineCheckCircle className='bullet' />
                                    </div>
                                    <div>
                                        <b>Handmade:</b> All candles are craftly made with love.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='li-cont'>
                                    <div>
                                        <AiOutlineCheckCircle className='bullet' />
                                    </div>
                                    <div>
                                        <b>Long lasting:</b> No more waste. Created to last!
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button>Learn more</button>
                    </div>
                    <div className='cont-right'>
                        <img className="benefits-img" src={benefits_image} alt="benefits image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits