import { loadProducts } from "../store/reducers/products";

export const load_products = (id) => {
    return dispatch => {
        fetch(`https://project-backend-qrwv.onrender.com/categories/${id}`)
            .then(resp => resp.json())
            .then(json => {
                console.log('json', json);
                const payload = json.data.map(el => ({
                    ...el,
                    hide_mark: false
                }))
                dispatch(loadProducts(payload))
            })
    }
}