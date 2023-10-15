import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product1.css';
import Rating from 'react-rating';


const Product1 = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
    <div className="product">
        <div className="image ">
            <img src={img} alt="" />
            </div> 
       
        <div className="container bbb">
             <h4 className="product-name">{name}</h4>
             <p><small>by: {seller}</small></p>
             <p>Price: {price}</p>
             <p><small>only {stock} left in stock - order soon</small></p>

             <Rating  
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fa fa-star icon-color"
             
             ></Rating>
             <br />
             <button 
                    onClick={()=>props.handleAddtoOrder(props.product)}

                    className="btn-regular">{element}Add to Order
             </button>

             
         </div>
        
    </div>
    )
}

export default Product1