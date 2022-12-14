import React from 'react'
import img from './media/header_img.png'
import s from './index.module.css'

export default function Header() {
    return (
        <div className={s.banner_section}>
            <div className={s.banner_sub_section}>
                <div>
                    <p className={s.first_title}>Распродажа</p>
                    <p className={s.second_title}>в честь нового сезона</p>
                    <div className={s.banner_buttons}>
                        <div>Все акции</div>
                        <div>Подробнее</div>
                    </div>
                </div>
                <img src={img} alt="banner_img" />
            </div>
        </div>
    )
}
