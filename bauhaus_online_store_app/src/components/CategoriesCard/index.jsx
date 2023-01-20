import React from 'react'


export default function CategoriesCard({ id, title, image }) {
    const src_img = `http://localhost:3333${image}`
    return (
        <div>
            <img src={src_img} alt={title} />
            <p>{title}</p>
        </div>
    )
}
