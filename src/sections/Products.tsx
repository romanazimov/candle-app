import './Products.scss'
import first from '../assets/warm_peach.png'

import Item from '../components/Products/Item';

function Products() {
    return (
        <section id='Products'>
            <div className='container'>
                <div>
                    <p className='title'>Products</p>
                    <p className='description'>Order it for you or your beloved ones</p>
                </div>
                <div className='candle-products'>
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                    <Item info={{ img: first, name: "Warm Peach", price: "$9.99" }} />
                </div>
            </div>
        </section>
    );
}

export default Products