import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../request/product_req'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'
import s from './index.module.css'


export default function DescriptionPage() {



    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    const { id } = useParams();

    const product_id = product.id;

    const add_to_cart = () => dispatch(addToCart({ id: product_id, title, image, price }))

    useEffect(() => {
        dispatch(load_product(id))
    }, []);

    console.log(product);

    const { title, description, price, image, discont_price } = product;
    const src_img = `https://project-backend-qrwv.onrender.com${image}`
    const discount = Math.round(100 - discont_price * 100 / price)

    return (
        <div className={s.product_block}>

            <p className={s.title}>{title}</p>

            <div className={s.product_item}>

                <img src={src_img} alt={title} />

                <div className={s.product_description}>

                    <div className={s.price_block}>
                        <p className={s.new_price}> {discont_price} €</p>
                        <p className={s.price}> {price} €</p>
                        <p className={s.discount}> -{discount}%</p>
                    </div>

                    <button onClick={add_to_cart}>Add to cart</button>
                    <p className={s.description}>{description}</p>

                </div>
            </div>
        </div>
    )
}
