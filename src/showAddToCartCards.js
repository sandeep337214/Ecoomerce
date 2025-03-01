import { getCartProductFromLS } from './getCartProductFromLS';
import products from "/api/products.json";
let cartproducts = getCartProductFromLS();

let filterproducts = products.filter((curProd)=>{
    return cartproducts.some((curElem)=>
        curElem.id===curProd.id);
})
console.log(filterproducts);
const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");

const showCartProduct=()=>{
    filterproducts.forEach((curElem)=>{
        const{category,image,name,} = curElem;
        let productClone = document.importNode(templateContainer.content,true); 
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        cartElement.append(productClone);    
    }
    )
}


showCartProduct();

