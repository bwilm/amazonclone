import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

    const [,dispatch]= useStateValue();
    const addToBasket = () => {
        //Add to basket
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating,
            },
        });
    }; 
    return (
        
        <div className="product">
            <p className="product_info">
                <small>{title}</small>
                </p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><span role="img" aria-label="rating">⭐️</span></p>
                        ))
                    }
           </div>

           <img src={image} className="product_image" alt=" "/>
           <button onClick={addToBasket}> Add to basket</button>
        </div>
    );
}

export default Product
