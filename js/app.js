import { getProduct, postProduct } from "./requisition.js";

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  saveProduct();
});

const saveProduct = () => {
  let nameProduct = document.getElementById('product_name').value;
  let valueProduct = document.getElementById('product_value').value;
  let qtdProduct = document.getElementById('product_qtd').value;

  const product = {
    nameProduct,
    valueProduct,
    qtdProduct,
  }
  postProduct(product.nameProduct, product.valueProduct, product.qtdProduct);
  clearInputs()
  getProduct()
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

