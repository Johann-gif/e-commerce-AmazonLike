import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, loggedinuser}, dispatch] = useStateValue();
    //console.log("my basket",basket);
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!loggedinuser && "/login"} className="header__link">
                    <div onClick={logoutUser} className="header__option">
                        <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                        <span className="header__optionLineTwo">{loggedinuser ? 'Sign out' : 'Sign in'} </span>
                    </div>
                </Link>
                {/* 2st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    <span className="header__optionLineTwo header__productCount">{basket.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;