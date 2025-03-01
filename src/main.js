import { showProductsContainer } from './homeProductCards';
import './style.css';

fetch('/api/products.json')
  .then(response => response.json())
  .then(data => {
      console.log("Fetched Products:", data); // Debugging
      showProductsContainer(data);
  })
  .catch(error => console.error("Error fetching products:", error));
