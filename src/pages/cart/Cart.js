import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from "../../features/cartSlice";
import "./cart.css";


function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    };

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    };

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your Cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/catalog">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="drug-title">Medicine</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems?.map(cartItem => (
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-drug">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.desc}</p>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-drug-price">${cartItem.price}</div>
                                <div className="cart-drug-quantity">
                                    <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                </div>
                                <div className="cart-drug-total-price">
                                    ${cartItem.price * cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Total Amount</span>
                                <span className="amount">${cart.cartTotalAmount}</span>
                            </div>
                            <div className="continue-shopping">
                                <Link to="/catalog">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
};

export default Cart;