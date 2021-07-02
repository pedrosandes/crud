import { postProduct } from "./requisition.js";

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  saveProduct();
});

const saveProduct = () => {
  let name = document.getElementById('product_name').value;
  let value = document.getElementById('product_value').value;
  let qtd= document.getElementById('product_qtd').value;

  const product = {
    name,
    value,
    qtd,
  }
  postProduct(product.name, product.value, product.qtd);
  clearInputs()
}

// Limpa os inputs
const clearInputs = () => {
  let name = document.getElementById('product_name');
  let value = document.getElementById('product_value')
  let qtd= document.getElementById('product_qtd');

  name.value = '';
  value.value = '';
  qtd.value = '';
}

