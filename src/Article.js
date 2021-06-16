import React, { useEffect} from 'react'
import './Article.css';
import { useLocation } from 'react-router';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useStateValue} from './StateProvider'

function Article({ id, title, image, price, rating }){
    const location = useLocation();
    useEffect(() => {
        console.log(location.state)
    })
    const [{basket}, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: location.state.id,
                title: location.state.title,
                image: location.state.image,
                price: location.state.price,
                rating: location.state.rating,
                description: location.state.description
            }
        })
    }

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
                <div className="giveMeYourMoney">
                <button onClick={addToBasket} className="buttonPanier">Ajouter au panier</button>
            </div>
            </div>
            
        </div>
    )
}

export default Article;