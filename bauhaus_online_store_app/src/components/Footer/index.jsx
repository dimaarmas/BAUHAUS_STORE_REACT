import React from 'react'
import s from './index.module.css'
import { InstagramOutlined } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'

export default function Footer() {
    return (
        <footer className={s.footer_section}>
            <div className={s.footer_block}>
                <div className={s.contact_block}>
                    <h2>Contacts</h2>
                    <p>+49 999 999 999</p>

                    <div className={s.social_media}>
                        <div className={s.icons}>
                            <InstagramOutlined />
                            <WhatsAppOutlined />
                        </div>
                    </div>
                </div>


                <div className={s.address_block}>
                    <h2>Address</h2>
                    <p>Kasseler Str. 134</p>
                    <p>opening time</p>
                    <p>around the clock</p>
                </div>

            </div>
        </footer>

    )
}
