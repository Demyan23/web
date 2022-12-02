import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import drugsReducer from "./features/drugsSlice";
import cartReducer, { getTotals } from './features/cartSlice';


const store = configureStore({
    reducer:{
        drugs: drugsReducer,
        cart: cartReducer,
    }
});

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);