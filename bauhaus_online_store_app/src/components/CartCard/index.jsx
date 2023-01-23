import React from 'react'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function CartCard({ id, title, price, image, count }) {
    const dispatch = useDispatch();

    const src_img = `http://localhost:3333${image}`

    return (
        <div className={s.cart_card}>
            <img src={src_img} alt={title} />
            <p>{title}</p>
            <p>{price * count}</p>

            <div className={s.triggers}>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}
