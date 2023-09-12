import './Item.scss';

interface ItemProps {
    info: {
        img: string;
        name: string;
        price: string;
    }
}

function Item({info}:ItemProps) {
    return (
        <div className='item'>
            <div className='img-cont'>
                <img className="candle-img" src={info.img} alt="bg image" />
            </div>
            <div className='info-cont'>
                <p className='prod-title'>{info.name}</p>
                <p className='prod-price'>{info.price}</p>
            </div>
        </div>
    );
}

export default Item