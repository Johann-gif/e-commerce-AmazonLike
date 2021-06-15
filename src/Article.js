import React, { useEffect, useState} from 'react'
import './Article.css';
import Product from './Product'
import {db} from './firebase'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useLocation } from 'react-router';

function Article({ id, title, image, price, rating }){
    const location = useLocation();
    useEffect(() => {
        console.log(location.state)
    })
    return (
        <div className="article">
            <img className="mainImg" src={location.state.image}/>
        </div>
    )
}

export default Article;