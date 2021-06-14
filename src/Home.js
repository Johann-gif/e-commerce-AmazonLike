import React, { useEffect, useState} from 'react'
import './Home.css';
import Product from './Product'
import {db} from './firebase'
import { red } from '@material-ui/core/colors';

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = db.collection("products");
    
function getProducts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setProducts(items);
        setLoading(false);
    });
}

    useEffect(()=> {
        getProducts();
    }, []);

    if (loading) {
        return <h2>loading...</h2>;
    }
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/em/pd21/xcm_em_Prime_Day_2021_856-FRFR_D_PDS-HP-Tall-Hero_1500x600._CB667248309_.jpg" alt=""/>
          
            
            <div className="home__row">
            {products.map((product) => (
                <Product id={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image}/>
                ))}
            </div>
            
                
           
            
        </div>
    )
}

export default Home;