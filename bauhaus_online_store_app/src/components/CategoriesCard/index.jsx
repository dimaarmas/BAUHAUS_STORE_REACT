import React from 'react'
import { loadAllCategories } from '../../store/reducers/categories'
import { useDispatch } from 'react-redux'

export default function CategoriesCard({ id, title, image }) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}
