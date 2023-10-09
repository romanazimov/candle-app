// import { useState, useEffect } from 'react'
import './Popular.scss'
import Item from '../components/Products/Item';
import staticPopularData from '../data/PopularProducts'

// interface Product {
//     imageUrl: string;
//     name: string;
//     price: number;
// }

function Popular() {
    // const [productData, setProductData] = useState<Product[]>([]);

    // useEffect(() => {
    //     fetch('https://localhost:7184/Item')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProductData(data);
    //             // console.log(data);
    //         })
    //         .catch((error) => {
    //             setProductData(staticData);
    //             console.error('Error fetching data:', error);
    //         });
    //     }, []);

    // const itemElems = 
    //     productData.map((product, index) => (
    //         <Item key={index} info={product} />
    //     ))


    // console.log(itemElems);

    return (
        <section id='Popular'>
            <div className='container'>
                <div>
                    <p className='title'>Popular</p>
                    <p className='description'>Our top selling products that you may like</p>
                </div>
                <div className='candle-products'>
                    { staticPopularData().map((product, index ) => (
                        <Item key={index} info={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Popular