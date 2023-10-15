import React, { useState,useEffect } from 'react';
import './Products.css';
import Product1 from '../Product1/Product1';
import Order from '../Order/Order';
import{addToDb, getStoredCart} from '../../utilities/fakedb'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(products);
     const [displayProducts, setDisplayProducts] = useState([]);
    // products to be rendered on the UI.


    // const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
    
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
    
            });
    }, [])
    useEffect(() => {
       
       if(products.length){
         const saveCard = getStoredCart();
         const storeCard = [];
        for (const key in saveCard) {
       
          const addproducts = products.find(product=>product.key === key);
          if(addproducts){

            const quantity=saveCard[key];
            addproducts.quantity = quantity;
            storeCard.push(addproducts);

          }
        }
        setOrder(storeCard);
       }
    }, [products]);


    const handleAddtoOrder =(product)=>{
        const newOrder = [...order, product];
        setOrder(newOrder);
        // save to local storage (for now)
        addToDb(product.key);
    }
    // search 
                const hendleSearch = event =>{
                const searchText = event.target.value;
                    const matchedProducts = products.filter(product => product.name.
                        toLowerCase().includes(searchText.toLowerCase()));
                        setDisplayProducts(matchedProducts);
                }
    return (
            <>
                <div className="search-container">
                    <input 
                    type="text" 
                    placeholder='search' 
                    onChange={hendleSearch}
                    />
                </div>
                <div className="shop-container">
                        <div className="product-container">
                            <h3>Products:{products.length}</h3>
                            {
                                displayProducts.map(product=><Product1
                                    key={product.key}
                                    product={product}
                                    handleAddtoOrder={handleAddtoOrder}  
                                    >
                                    </Product1>)
                            }
                        
                        </div>
                        <div className="cart-container">
                            <Order order={order}></Order>

                        </div>
                </div>
            </>
    )
}

export default Products