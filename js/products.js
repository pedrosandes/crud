import { getProduct } from "./requisition.js"

const tBody = document.querySelector('.tbody')

export const makeProducts = async () => {
  const data = await getProduct();
  data.forEach(({produto, valor, quantidade}) => {
    createRowTable(produto, valor, quantidade);
  })
}

const createRowTable = (nomeProduto, valorProduto, quantidadeProduto) => {
    let trElement = document.createElement('tr')
    let tdElement1 = document.createElement('td')
    let tdElement2 = document.createElement('td')
    let tdElement3 = document.createElement('td')

    tdElement1.textContent = nomeProduto;
    tdElement2.textContent = valorProduto;
    tdElement3.textContent = quantidadeProduto; 

    trElement.appendChild(tdElement1)
    trElement.appendChild(tdElement2)
    trElement.appendChild(tdElement3)
    tBody.appendChild(trElement)
}

makeProducts()
