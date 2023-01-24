import React from 'react'
import logo from './media/bauhaus_logo.png'
import cart_icon from './media/basketCart-icon.svg'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className={s.header}>
            <div className={s.logo_block}>
                <Link to='/'>
                    <img src={logo} alt="company_logo" />
                </Link>

                <Link to='/categories'>
                    <div>Catalog</div>
                </Link>

            </div>
            <nav>
                <ul className={s.nav_block}>
                    <Link to='/categories'>
                        <li>Categories</li>
                    </Link>

                    <li>Coupon</li>
                    <li>Promotions</li>
                    <li>Contacts</li>
                    <Link to='/cart'>
                        <img src={cart_icon} className={s.shopping_cart} />
                    </Link>
                </ul>
            </nav >
        </header>

    )
}
