import React from 'react'
import logo from './media/bauhaus_logo.png'
import s from './index.module.css'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function Nav() {

    const categoryTextColor = {
        color: '#339933'
    }

    return (
        <header className={s.header}>
            <div className={s.logo_block}>
                <img src={logo} alt="company_logo" />
                <div>Каталог</div>
            </div>
            <nav>
                <ul className={s.nav_block}>
                    <Link>
                        <li style={categoryTextColor}>Категории</li>
                    </Link>

                    <li>Купон</li>
                    <li>Акции</li>
                    <li>Контакты</li>
                    <Link to='/cart'>
                        <ShoppingCartOutlined className={s.shopping_cart} />
                    </Link>

                </ul>
            </nav >
        </header>

    )
}
