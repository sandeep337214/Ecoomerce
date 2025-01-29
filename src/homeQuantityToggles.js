export const homeQuantityToggles=(event,id,stock)=>{
    const currentCardElements=document.querySelector(`#card${id}`);
    // console.log(currentCardElements);
    let productQuantity=currentCardElements.querySelector(".productQuantity");
    // console.log(productQuantity);
    let quantity=parseInt(productQuantity.getAttribute("data-quantitys"))||1;

    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity===stock){
            quantity=stock;
        }

    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }

    
   
    
    // console.log(quantity);
    productQuantity.setAttribute("data-quantitys",quantity.toString());
    productQuantity.innerText=quantity;
    
   
    
    return quantity;

}