import React from 'react'
import logo from './media/bauhaus_logo.png'
import s from './index.module.css'
import { ShoppingCartOutlined } from '@ant-design/icons'

export default function Nav() {
    return (
        <nav className={['wrapper', s.nav_block].join(' ')}>
            <a href='#'>
                <img src={logo} alt="company_logo" />
            </a>
            <button className={s.catalog_btn}>Каталог</button>
            <ul className={s.nav_menu}>
                <li>Категории</li>
                <li>Купон</li>
                <li>Акции</li>
                <li>Контакты</li>
                <ShoppingCartOutlined className={s.shopping_cart} />
            </ul>
        </nav>
    )
}
