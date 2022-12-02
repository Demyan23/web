import React from "react";
import logotype from "./../../assets/icons/logo.svg"
import cart from "./../../assets/icons/cart.svg"
import user from "./../../assets/icons/user.svg"
import "./header.css"

function Header() {
    return (
        <header>
            <img src={logotype} className="logotype" />
            <h1>Tabletki UA</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/catalog">Catalog</a>
                <a href="/cart">Cart</a>
            </nav>
            <img src={cart} className="cart"/>
            <img src={user} className="user"/>
        </header>
    )
}

export default Header;

