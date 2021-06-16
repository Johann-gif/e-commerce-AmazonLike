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
    const images = [
    "https://media.discordapp.net/attachments/775298342488899590/854783048679555112/540510-monopoly-fete-ses-85-ans-au-bhv-marais.png?width=856&height=676"
    , "https://media.discordapp.net/attachments/775298342488899590/854781799628406824/b20e15f_oLyBcQgVp2b_9xbbzgzj56mi.png?width=1352&height=676",
     "https://media.discordapp.net/attachments/775298342488899590/854781920361709568/maxresdefault.png?width=1202&height=676"]
    
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
                <Product id={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image} description={product.description}/>
                ))}

            </div>
            
                
           
            
        </div>
    )
}

export default Home;