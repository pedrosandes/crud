var URL = 'https://sheetdb.io/api/v1/yz1twbdlkr3h9';

export const postProduct = (productName, productValue, productQuantidade) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'data': {
        produto: productName,
        valor: productValue,
        quantidade: productQuantidade,
      }
    })
  })
}

export const getProduct = async () => {
  const response = await fetch(URL)
  const data = await response.json();
  if (!response.ok) {
    const msgError = `Error in get method: ${response.status}`
    throw new Error (msgError)
  }
  return data;
}
