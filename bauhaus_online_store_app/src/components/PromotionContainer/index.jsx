import React, { useContext } from 'react'
import { Context } from '../../context'
import PromotionCard from '../PromotionCard';
import s from './index.module.css'

export default function PromotionContainer() {

    const { promCard } = useContext(Context);

    return (
        <div className={s.promotion_section}>
            <div className={s.promotion_title}>
                <h2>Promotion</h2>
            </div>
            <div className={s.promotion_items}>
                {
                    promCard.map(el => <PromotionCard key={el.id} {...el} />)
                }
            </div>

        </div>
    )
}
