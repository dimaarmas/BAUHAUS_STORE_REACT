import React from 'react'
import s from './index.module.css'
import { InstagramOutlined } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'

export default function Footer() {
    return (
        <footer className={s.footer_section} id='footer'>
            <div className={s.footer_item}>
                <div>
                    <h2>Contacts</h2>
                    <br />
                    <p className={s.phone}>+49 999 999 99 99</p>

                    <br />
                    <div className={s.social_media_icons}>
                        <a href="instagram.com">
                            <InstagramOutlined />
                        </a>

                        <a href="https://web.whatsapp.com/">
                            <WhatsAppOutlined />
                        </a>
                    </div>

                    <div className={s.social_media_title}>
                        <p>instagram</p>
                        <p>whatsapp</p>
                    </div>
                </div>

                <div>
                    <p className={s.title_address}>Address</p>
                    <br />
                    <p className={s.street}>
                        Kasseler Str. <br /> Bad Emstal 34308
                    </p>{" "}
                    <br />
                    <p className={s.working_text}>Working hours</p>
                    <p className={s.working_time}> day and night</p>
                </div>

            </div>

        </footer>

    )
}
