import React, { useContext } from 'react'
import { Context } from '../../context'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'


export default function CategoryContainer() {

    const { categoryCard } = useContext(Context);

    return (
        <div className={s.categories_section}>
            <div className={s.categories_title}>
                <h1>Categories</h1>
                <p>All Categogries</p>
            </div>

            <div className={s.categories_item}>
                {
                    categoryCard.map(el => <CategoryCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
