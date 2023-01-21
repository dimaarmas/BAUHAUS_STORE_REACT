import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css'


export default function CartPage() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    return (
        <div>
            {
                cart.map(el => <CartCard key={el.id} {...el} />)
            }
        </div>
    )
}

