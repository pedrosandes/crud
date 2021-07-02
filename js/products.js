import { getProduct } from "./requisition.js"

const tBody = document.querySelector('.tbody')

const createRowTable = (productName, productValue, productQtd) => {
  let trElement = document.createElement('tr')
  let tdElement1 = document.createElement('td')
  let tdElement2 = document.createElement('td')
  let tdElement3 = document.createElement('td')
  
  tdElement1.textContent = productName;
  tdElement2.textContent = productValue;
  tdElement3.textContent = productQtd; 
  
    trElement.appendChild(tdElement1)
    trElement.appendChild(tdElement2)
    trElement.appendChild(tdElement3)
    tBody.appendChild(trElement)
  }

const makeProducts = async () => {
  const data = await getProduct();
  data.forEach(({produto, valor, quantidade}) => {
    createRowTable(produto, valor, quantidade);
  })
}
  
makeProducts()
