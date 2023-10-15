import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCard from '../useCard/useCard';
import Card from '../Card/Card';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [order, setCard] = useCard(products);

    const handleRemove = key =>{
       const removeOrder= order.filter(product=>product.key !== key)
       setCard(removeOrder)
       removeFromDb(key)
    }
    // const handlePlaceOrder =() =>{
    //     setCard([]);
    //     history.pushState('/pl')
    // }


    return (

        <div>
           <div className="shop-container">
            <div className="product-container">

                {
                    order.map(product=><ReviewItem 
                        key={product.key} 
                        product={product}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                }


            </div>

            <div className="cart-container">
                <Order order={order}></Order>
            </div>
           </div>
       
        </div>
    );
};

export default OrderReview;