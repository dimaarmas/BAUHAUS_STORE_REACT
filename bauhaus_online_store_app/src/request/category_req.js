import { loadAllCategories } from "../store/reducers/categories"

export const load_all_categories = (dispatch) => {
    fetch(`https://project-backend-qrwv.onrender.com/categories/all`)
        .then(resp => resp.json())
        .then(json => dispatch(loadAllCategories(json)))
        .catch(error => console.error(error))
}