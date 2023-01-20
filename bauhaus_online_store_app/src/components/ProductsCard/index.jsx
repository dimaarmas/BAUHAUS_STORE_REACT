import React from 'react'

export default function ProductsCard({ id, image, title, price }) {
    const src_img = `http://localhost:3333${image}`
    return (
        <div>
            <img src={src_img} alt={title} />
            <p>{price} €</p>
            <p>{title}</p>
        </div>
    )
}
