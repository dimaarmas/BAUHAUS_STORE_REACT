import React, { useEffect } from 'react'
import { getProducts } from '../../store/reducers/categories'

export default function CartPage() {
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>CartPage</div>
    )
}
