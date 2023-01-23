import React, { useContext } from 'react'
import { Context } from '../../context'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'
import { Link } from 'react-router-dom';


export default function CategoryContainer() {

    const { categoryCard } = useContext(Context);


    return (
        <div className={s.categories_section}>
            <div className={s.categories_title}>
                <h1>Categories</h1>
                <Link to='/categories'>
                    <p>All Categogries</p>
                </Link>

            </div>

            <div className={s.categories_item}>
                {
                    categoryCard.map(el => <CategoryCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
