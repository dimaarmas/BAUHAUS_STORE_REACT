import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../Nav";
import Header from "../Header";
import CategoryContainer from "../CategoryContainer";
import Form from "../Form";
import PromotionContainer from "../PromotionContainer";

export default function Layout() {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Header />
            <CategoryContainer />
            <Form />
            <PromotionContainer />
        </div>
    )
}
