import React, { useState } from 'react'
import './Home.css';
import Product from './Product'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home() {
    const [currImg, setCurrImg] = useState(1);
    const images = ["https://images-eu.ssl-images-amazon.com/images/G/08/em/pd21/xcm_em_Prime_Day_2021_856-FRFR_D_PDS-HP-Tall-Hero_1500x600._CB667248309_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/OWUxNzk1ZDEt/OWUxNzk1ZDEt-ZDE2MDgyMmEt-w1500._CB669644074_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/MixteS1/VMIX_S1_GWBleedingHero_HO_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB666039474_.jpg"]
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
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
            </div>
            <div className="home__row">
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={13.96} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
            </div>
            <div className="home__row">
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={11.96} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
                <Product id="1231223" title="The Lean Startup: How Contant Innovation" price={12.96} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/41uNAbThwiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
            </div>
        </div>
    )
}

export default Home;