import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function CategoriesCard({ id, title, image }) {
    const src_img = `https://project-backend-qrwv.onrender.com/${image}`

    const link = `/categories/${id}`
    return (

        <div className={s.categories_item}>
            <Link to={link}>
                <img src={src_img} alt={title} />
            </Link>
            <p>{title}</p>
        </div>
    )
}
