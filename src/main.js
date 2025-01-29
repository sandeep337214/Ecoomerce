import { showProductsContainer } from './homeProductCards';
import './style.css';

import products from "/api/products.json"

fetch('/api/products.json')
  .then(response => response.json())
  .then(data => data);
  





showProductsContainer(products);













