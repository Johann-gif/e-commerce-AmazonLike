import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useHistory} from 'react-router';

function ProductCart({ id, title, image, price, rating, description }) {

    const [{basket}, dispatch] = useStateValue();
    const hist = useHistory()
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    const routeChange = () => {
        hist.push({
            pathname: '/produit',
            state: {
                id: id,                
                title: title,
                image: image,
                price: price,
                rating: rating,
                description: description
            }
        })
    }

    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p className="productcart__title" onClick={routeChange}>{title}</p>
                <p className="productcart__price">{price}€</p>

                <div className="productcart__rating">
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
                <button onClick={removeItem}>Retirer du panier</button>
            </div>
        </div>
    )
}

export default ProductCart