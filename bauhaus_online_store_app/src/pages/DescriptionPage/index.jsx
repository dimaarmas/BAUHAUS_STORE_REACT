import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../request/product_req'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'


export default function DescriptionPage() {



    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    const { id } = useParams();

    useEffect(() => {
        dispatch(load_product(id))
    }, []);

    console.log(product);

    const { title, description, price, image, discont_price } = product;
    const src_img = `http://localhost:3333${image}`

    return (
        <div>
            <img src={src_img} alt={title} />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <div>
                    <p>{price}</p>
                    <p>{discont_price}</p>
                    <p>-7%</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
