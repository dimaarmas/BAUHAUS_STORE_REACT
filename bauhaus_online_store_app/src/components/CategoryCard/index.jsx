import React from 'react'

export default function CategoryCard({ title, image }) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}
