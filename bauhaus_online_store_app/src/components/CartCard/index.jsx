import React from 'react'
import { useDispatch } from 'react-redux'
import { cartIncrement, cartDecrement, deleteFromCart } from '../../store/reducers/cart';
import s from './index.module.css'

export default function CartCard({ id, title, price, discont_price, image, count }) {
    const dispatch = useDispatch();
    const increment = () => dispatch(cartIncrement(id));
    const decrement = () => dispatch(cartDecrement(id));
    const delete_from_cart = () => dispatch(deleteFromCart(id));

    const src_img = `https://project-backend-qrwv.onrender.com/${image}`

    return (
        <div className={s.cart_card}>
            <div>
                <img src={src_img} alt={title} />
            </div>

            <div>
                <p className={s.card_title}>{title}</p>

                <div className={s.triggers}>
                    <button onClick={decrement}>-</button>
                    <p> {count} </p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <p className={s.price}> {(price * count).toFixed(2)} € </p>
            <div>
                <p onClick={delete_from_cart} className={s.cross}>x</p>
                <p className={s.discont_price}> {(discont_price * count).toFixed(2)} €</p>
            </div>
        </div>
    )
}
