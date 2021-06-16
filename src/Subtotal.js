import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal(){

    const getCartTotal = (basket) => basket?.reduce((amount,item)=> item.price + amount, 0);

    const [{basket}] = useStateValue();
    return(
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Total ( {basket.length} articles ) : <strong>{`${value}`}</strong>
                    </p>
                )}
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"€"}
            />
            <button className="checkout__button">Commander</button>
        </div>
    )
}

export default Subtotal