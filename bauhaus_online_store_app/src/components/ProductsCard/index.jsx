import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductsCard({ id, image, title, price, discont_price }) {
    const src_img = `http://localhost:3333${image}`


    return (


        <div className={s.products_item}>
            <Link>
                <img src={src_img} alt={title} />
            </Link>
            <div className={s.price_section}>
                <p>{price} €</p>
                <p>{discont_price} €</p>
                <p>-7%</p>
            </div>
            <p>{title}</p>
        </div>
    )
}
