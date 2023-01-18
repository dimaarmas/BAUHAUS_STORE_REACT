import React, { useEffect } from 'react'
import { load_all_categories } from '../../request/category_req'
import { useSelector, useDispatch } from 'react-redux'
import s from './index.module.css'
import CategoriesPageCard from '../../components/CategoriesPageCard'

export default function CategoriesPage() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);


    useEffect(() => {
        dispatch(load_all_categories)
    }, [])

    return (
        <div>
            {
                categories.map(el => <CategoriesPageCard key={el.id} {...el} />)
            }
        </div>
    )
}
