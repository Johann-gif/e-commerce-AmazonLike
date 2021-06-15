import React, { useEffect, useState} from 'react'
import './Home.css';
import Product from './Product'
import {db} from './firebase'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = db.collection("products");
    const [currImg, setCurrImg] = useState(1);
    const images = ["https://images-eu.ssl-images-amazon.com/images/G/08/em/pd21/xcm_em_Prime_Day_2021_856-FRFR_D_PDS-HP-Tall-Hero_1500x600._CB667248309_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/OWUxNzk1ZDEt/OWUxNzk1ZDEt-ZDE2MDgyMmEt-w1500._CB669644074_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/MixteS1/VMIX_S1_GWBleedingHero_HO_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB666039474_.jpg"]
    
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
            
            <div className="home__carousel">
                <div className="home__carousel__image" style={{ backgroundImage: `url(${images[currImg]})` }}>
                    <div className="home__carousel__left" onClick={() => { currImg > 0 && setCurrImg(currImg - 1); console.log(images[currImg]) }}>
                        <ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="home__carousel__center">
                       
                    </div>
                    <div className="home__carousel__right" onClick={() => { currImg < images.length - 1 && setCurrImg(currImg + 1); console.log(images[currImg])  }}>
                        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                    </div>
                </div>

            </div>
            
            <div className="home__row">
            {products.map((product) => (
                <Product id={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image}/>
                ))}

            </div>
            
                
           
            
        </div>
    )
}

export default Home;