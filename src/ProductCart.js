import React from 'react'
import './ProductCart.css'
import { useStateValue } from './StateProvider'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ProductCart({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
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