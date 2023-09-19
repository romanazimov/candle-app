import { useState, useEffect } from 'react'
import './Products.scss'
import Item from '../components/Products/Item';
import staticData from '../data/Products'

interface Product {
    imageUrl: string;
    name: string;
    price: number;
}

function Products() {
    const [productData, setProductData] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:7184/Item')
            .then((response) => response.json())
            .then((data) => {
                setProductData(data);
                // console.log(data);
            })
            .catch((error) => {
                setProductData(staticData);
                console.error('Error fetching data:', error);
            });
        }, []);

    const itemElems = 
        productData.map((product, index) => (
            <Item key={index} info={product} />
        ))


    // console.log(itemElems);

    return (
        <section id='Products'>
            <div className='container'>
                <div>
                    <p className='title'>Products</p>
                    <p className='description'>Order it for you or your beloved ones</p>
                </div>
                <div className='candle-products'>
                    {itemElems}
                </div>
                <button className='btn-more'>See more</button>
            </div>
        </section>
    );
}

export default Products