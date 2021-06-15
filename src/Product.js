import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    console.log('basket content', basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"><strong>{price}</strong><small>€</small></p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <StarIcon/>
                            ))
                        
                    }
                    {
                        Array(5-rating)
                        .fill()
                        .map((_)=>(
                            <StarBorderIcon/>
                        ))
                    }
                </div>
            </div>
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    )
}

export default Product;