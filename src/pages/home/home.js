import React from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import { Content } from "./styled"

export default function Home() {
    return (
        <div className="container__wrapper">
            <Sidebar/>
            <Content>
                <Header/>
                
                <Footer/>
            </Content>
        </div>
    );
}