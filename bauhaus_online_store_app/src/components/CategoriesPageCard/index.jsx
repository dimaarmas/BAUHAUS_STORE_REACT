import React from 'react'

export default function CategoriesPageCard({ id, title, image }) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}
