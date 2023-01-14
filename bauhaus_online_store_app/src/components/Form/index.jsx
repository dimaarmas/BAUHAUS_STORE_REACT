import React from 'react'
import img_gnome from '../../media/garden_gnome-img.png'
import s from './index.module.css'

export default function Form() {
    return (
        <div className={s.form_section}>
            <img src={img_gnome} alt="garden_gnome" />
            <div className={s.form_item}>
                <p className={s.discount_text}>Discount 5%</p>
                <p className={s.under_text}>for the first order</p>
                <input type="text" placeholder='+49' name='phone' />
                <button>Get a discount</button>
            </div>
        </div>
    )
}
