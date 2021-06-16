import React, { useEffect, useState} from 'react'
import './Article.css';
import Product from './Product'
import {db} from './firebase'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useLocation } from 'react-router';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Article({ id, title, image, price, rating }){
    const location = useLocation();
    useEffect(() => {
        console.log(location.state)
    })
    return (
        <div className="article">
            <div className="img">
                <img className="mainImg" src={location.state.image}/>
            </div>
            <div className="description">
                <h1>{location.state.title}</h1>
                <div className="product__rating">
                    {
                        Array(location.state.rating)
                            .fill()
                            .map((_) => (
                                <StarIcon/>
                            ))
                        
                    }
                    {
                        Array(5-location.state.rating)
                        .fill()
                        .map((_)=>(
                            <StarBorderIcon/>
                        ))
                    }
                </div>
                <p>Prix : {location.state.price}€</p>
                <p>Description : {location.state.description}</p>
            </div>
            <div className="giveMeYourMoney">
                <button className="buttonPanier">Ajouter au panier</button>
            </div>
        </div>
    )
}

export default Article;