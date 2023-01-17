import React from 'react'
import Header from "../../components/Header";
import CategoryContainer from "../../components/CategoryContainer";
import Form from "../../components/Form";
import PromotionContainer from "../../components/PromotionContainer";

export default function MainPage() {
    return (
        <div>
            <Header />
            <CategoryContainer />
            <Form />
            <PromotionContainer />
        </div>
    )
}
