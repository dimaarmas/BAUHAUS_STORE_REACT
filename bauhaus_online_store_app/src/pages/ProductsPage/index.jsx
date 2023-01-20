import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { load_products } from '../../request/products_req'
import ProductsCard from '../../components/ProductsCard';
import s from './index.module.css'

export default function ProductsPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(load_products(id))
    })

    return (
        <div className={s.products_page}>
            <div className={s.products_container}>
                {
                    products.map(el => <ProductsCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
