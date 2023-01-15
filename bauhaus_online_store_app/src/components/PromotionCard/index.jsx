import React from 'react'
import s from './index.module.css'

export default function PromotionCard({ title, image, price, price_actual, discount }) {
    return (
        <div className={s.promotion_picture}>
            <img src={image} alt={title} />
            <div className={s.price_text}>
                <p className={s.reduced_price}>{price} €</p>
                <p className={s.actual_price}>{price_actual} €</p>
                <p className={s.discount_price}>{discount} %</p>
            </div>

            <p>{title}</p>
        </div>
    )
}
