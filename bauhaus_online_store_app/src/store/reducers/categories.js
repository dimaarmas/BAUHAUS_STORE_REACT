export const getProducts = () => {
    fetch('http://localhost:3333/products/all')
        .then(resp => resp.json())
        .then(json => console.log(json))
}