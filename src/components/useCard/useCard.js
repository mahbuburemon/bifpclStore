import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

 const useCard = products=>{
    const [card,setCard] = useState([]);

    useEffect(()=>{
        
        if(products.length){
            const saveCard = getStoredCart();
            const storedCard = [];
            for(const key in saveCard){
                const addedProduct = products.find(product=>product.key=== key);
                if(addedProduct){
                    const quantity =saveCard[key];
                    addedProduct.quantity = quantity;
                    storedCard.push(addedProduct);
                }
            }
            setCard(storedCard);
        }


    },[products])
    return [card,setCard];
 }
 export default useCard;