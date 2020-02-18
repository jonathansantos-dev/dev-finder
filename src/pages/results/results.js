import React, {useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import { Content, Main, Span} from "./styled"
import axios from 'axios';

export default function Results(props) {
    const [users, setUsers] = useState([])
    
    
    
    useEffect(() => {
        async function getuser(){
            const { match: { params } } = props;
            const searched = params.searched;
            axios.get(`https://api.github.com/search/users?q=${searched}`)
                .then(data => setUsers(data.data.items))
        }
        getuser()
    }, [props])
    
    return (
        <div className="container__wrapper">
            <Sidebar/>
            <Content>
                <Header/>
                <Main>
                    <Span>Resultado da busca:</Span>
                    {users.map((item, index) => (
                        <li key={index}>{item.login}</li>
                    ))}
                </Main>
                <Footer/>
            </Content>
        </div>
    );
}