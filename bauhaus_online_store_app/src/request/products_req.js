import { loadProducts } from "../store/reducers/products";

export const load_products = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
            .then(resp => resp.json())
            .then(json => dispatch(loadProducts(json)))
            .catch(error => console.error(error))
    }
}