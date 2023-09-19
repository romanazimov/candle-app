import './Item.scss';

interface ItemProps {
    info: {
        name: string;
        imageUrl: string;
        price: number;
    }
}

function Item({info}:ItemProps) {
    // console.log(info);

    return (
        <div className='item'>
            <div className='img-cont'>
                <img className="candle-img" src={info.imageUrl} alt={info.name} />
                {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/QHhjWCB/summer-cherries.png" alt="summer-cherries" border="0" /></a> */}
            </div>
            <div className='info-cont'>
                <p className='prod-title'>{info.name}</p>
                <p className='prod-price'>${info.price}</p>
            </div>
        </div>
    );
}

export default Item