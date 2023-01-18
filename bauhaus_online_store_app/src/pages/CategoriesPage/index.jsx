import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesCard from '../../components/CategoriesCard';
import { load_all_categories } from '../../request/category_req'
import s from './index.module.css'


export default function CategoriesPage() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(load_all_categories)
    })


    return (
        <div>
            <h1>Category</h1>
            <div>
                {
                    categories.map(el => <CategoriesCard key={el.id} {...el} />)
                }
            </div>

        </div>
    )
}
