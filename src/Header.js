import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider"



function Header() {

    const[{ basket }] = useStateValue();

    console.log(basket)

    return <nav className="header">

        <Link to="/home">
        <img className="header_logo" src="https://businesblog.com/wp-content/uploads/2020/04/7T4MA2NDTGDHAOIV4OKQT5HYRA.jpg" alt=" "></img>
        </Link>

        <div className="header_search">

        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">

            <Link to="/login" className="header_link">
            <div className="header_option">
            <span>Hello B</span>
            <span>Sign In</span>
            </div>
            </Link>

            <Link to="/home">
            <div className="header_option">
            <span>Returns</span>
            <span>& Orders</span>
            </div>
            </Link>

            <Link to="home"> 
            <div className="header_option">
            <span>Your</span>
            <span>Prime</span>
            </div>
            </Link>

            <Link to="/checkout">
            <div className="header_option_basket">
                <ShoppingBasket/>
                <span className="header_option_basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
        {/*BASKET ICON WITH NUMBER*/}
            
        </nav>
    
}

export default Header
