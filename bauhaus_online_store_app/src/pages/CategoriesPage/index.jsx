import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesCard from '../../components/CategoriesCard';
import { load_all_categories } from '../../request/category_req'
import s from './index.module.css'




export default function CategoriesPage() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category)

    useEffect(() => {
        dispatch(load_all_categories)
    }, [])


    return (
        <div className={s.all_categories_section}>
            <h1>Categories</h1>
            <div className={s.categories_block}>
                {
                    categories.map(el => <CategoriesCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
