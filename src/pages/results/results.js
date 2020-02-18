import React, {useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import { Content, Main, Span, Lista, User, Avatar} from "./styled"
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Results(props) {
    const [users, setUsers] = useState([])
    
    
    
    useEffect(() => {
        async function getuser(){
            const { match: { params } } = props;
            const searched = params.searched;
            axios.get(`https://api.github.com/search/users?q=${searched}`)
                .then(data => {
                    console.log(data.data.items)
                    return setUsers(data.data.items)
                })
                // .then(data => console.log(data.data.items))
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
                    <Lista>
                        {users.map((item, index) => (
                            <User key={index}>
                                <Avatar><img src={item.avatar_url} alt={item.login}/></Avatar>
                                <span>{item.login}</span>
                                <Link to={`/details/${item.login}`}>Ver detalhes</Link>
                            </User>
                        ))}
                    </Lista>
                </Main>
                <Footer/>
            </Content>
        </div>
    );
}