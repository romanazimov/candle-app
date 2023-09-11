import './Products.scss'
import first from '../assets/warm_peach.png'

function Products() {
    return (
        <section id='Products'>
            <div>
                <p className='title'>Products</p>
                <p className='description'>Order it for you or your beloved ones</p>
            </div>
            <div className='candle-products'>
                <div className='first'>
                    <div className='img-cont'>
                        <img className="candle-img" src={first} alt="bg image" />
                    </div>
                    <div className='info-cont'>
                        <p className='prod-title'>Warm Peach</p>
                        <p className='prod-price'>$9.99</p>
                    </div>
                </div>
                <div className='first'>
                    <div className='img-cont'>
                        <img className="candle-img" src={first} alt="bg image" />
                    </div>
                    <div className='info-cont'>
                        <p className='prod-title'>Warm Peach</p>
                        <p className='prod-price'>$9.99</p>
                    </div>
                </div>
                <div className='first'>
                    <div className='img-cont'>
                        <img className="candle-img" src={first} alt="bg image" />
                    </div>
                    <div className='info-cont'>
                        <p className='prod-title'>Warm Peach</p>
                        <p className='prod-price'>$9.99</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products