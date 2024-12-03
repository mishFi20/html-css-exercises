fetch('https://api.escuelajs.co/api/v1/products')
    .then(function (response) {
        return response.json()
    })
    .then((json) => {
        fillProducts(json)
    })
    .catch((error) => {
        console.log('Error en la api')
        console.log(error)
    })

function fillProducts(products) {
    products.forEach((product) => {
        const element = document.createElement('div')
        element.innerHTML = `
            <h3>${product.title}</h3>
            <p>Precio: $${product.price}</p>
            <div>
                ${createImagesList(product.images)}
            </div>
        `;
        element.classList.add('product')
        const contenedor = document.getElementById('products-container')
        contenedor.appendChild(element)
    })
}

function createImagesList(images) {
    const cleanImages = images.map(image => image.replace(/[\[\]\\"]/g, ''))
    let output = '';
    cleanImages.forEach((image) => {
        output = output + `<img width="80px" src="${image}" />`
    })

    console.log(output)

    return output
}