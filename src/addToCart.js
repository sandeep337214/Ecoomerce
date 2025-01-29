import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart=(event,id,stock)=>{
    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);
    
    let quantity=document.querySelector(".productQuantity").innerText;
    let price=document.querySelector(".productPrice").innerText;
    
    price=price.replace("₹","")
    price=Number(price*quantity);
    quantity=Number(quantity);
    console.log(quantity,price);
    
    arrLocalStorageProduct.push({
        id,quantity,price
    })
    localStorage.setItem("cartProductLs",JSON.stringify(arrLocalStorageProduct));


    
    

}