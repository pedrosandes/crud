var URL = 'https://sheetdb.io/api/v1/yz1twbdlkr3h9';

export const postProduct = (productName, productValue, productQtd) => {
  try {
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
          quantidade: productQtd,
        }
      })
    })
  } catch(err) {
    console.log(`Error in post method: ${err}`)
  }
}

export const getProduct = async () => {
  try {
    const response = await fetch(URL)
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(`Error in get method: ${err}`)
  }
}
