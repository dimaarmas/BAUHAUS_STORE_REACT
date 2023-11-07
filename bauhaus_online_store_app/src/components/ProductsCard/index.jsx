import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductsCard({ id, image, title, price, discont_price }) {
    const src_img = `https://project-backend-qrwv.onrender.com/${image}`

    const product_link = `/product/${id}`

    const discount = `${Math.round(100 - discont_price * 100 / price)}`
    return (


        <div className={s.products_item}>
            <Link to={product_link}>
                <img src={src_img} alt={title} />
            </Link>
            <div className={s.price_section}>
                <p>{price} €</p>
                <p>{discont_price} €</p>
                <p>-{discount} %</p>
            </div>
            <p>{title}</p>
        </div>
    )
}
