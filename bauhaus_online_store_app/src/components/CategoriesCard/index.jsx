import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function CategoriesCard({ id, title, image }) {
    const src_img = `http://localhost:3333${image}`

    const link = `/${id}`
    return (
        <Link to={link}>
            <div className={s.categories_item}>
                <img src={src_img} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    )
}
