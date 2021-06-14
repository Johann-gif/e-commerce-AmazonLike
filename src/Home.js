import React from 'react'
import './Home.css';
import Product from './Product'

function Home(){
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/em/pd21/xcm_em_Prime_Day_2021_856-FRFR_D_PDS-HP-Tall-Hero_1500x600._CB667248309_.jpg" alt=""/>
            <div className="home__row">
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"/>
            </div>
        </div>
    )
}

export default Home;