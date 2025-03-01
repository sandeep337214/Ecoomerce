import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();

export const addToCart=(event,id,stock)=>{
    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);
    
    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price=currentProdElem.querySelector(".productPrice").innerText;
    
    price=price.replace("₹","");
    let exitingProd=arrLocalStorageProduct
    .find((curProd)=> curProd.id===id);
    console.log(exitingProd);
    
    if(exitingProd && quantity>1){
        quantity= Number(exitingProd.quantity)+Number(quantity);
        price = Number(price*quantity);
        let updatedCart={id,quantity,price};
        updatedCart=arrLocalStorageProduct.map((curProd)=>{
            return (curProd.id===id) ? updatedCart : curProd;
        });
        localStorage.setItem("cartProductLs",JSON.stringify(updatedCart));
    }
    if(exitingProd){
        
        return false;
    }
    price =Number(price*quantity);
    quantity=Number(quantity);
    
    
    arrLocalStorageProduct.push({id,quantity,price});   
    localStorage.setItem("cartProductLs",JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);    
}