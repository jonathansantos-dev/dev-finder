import React, {useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import { Content, Main, Span, User } from "./styled"

export default function Results() {
    // const [user, setUser] = useState({})

    useEffect(() => {
        console.log('oi')
        async function getuser(){
            // get url param

            const response = await fetch(`https://api.github.com/users/`)
        }
        getuser();
    }, [])
    
    return (
        <div className="container__wrapper">
            <Sidebar/>
            <Content>
                <Header/>
                <Main>
                    <Span>Resultado da busca:</Span>
                    <User>

                    </User>
                </Main>
                <Footer/>
            </Content>
        </div>
    );
}