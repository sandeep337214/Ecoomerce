import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer=document.querySelector('#productContainer');
const productTemplate=document.querySelector("#productTemplate");

export const showProductsContainer=(products)=>{
    if(!products){
        return false;
    }
    products.forEach((curElem)=>{
        const{brand,category,description,id,image,name,price,stock} = curElem;

        const productClone= document.importNode(productTemplate.content,true);
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productStock").textContent=`${stock}`;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productPrice").textContent=`₹${price}`;
        productClone.querySelector(".productActualprice").textContent=`₹${price*4}`;
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock);
        });
        productClone.querySelector(".add-to-cart-button")
        .addEventListener("click",(event)=>{
            addToCart(event,id,stock);
        });
        

        productContainer.append(productClone);

    })

}

