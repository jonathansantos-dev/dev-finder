import React, {useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/sidebar"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import { Content, Main, Span, Avatar, Block, Side, Lista, Repo } from "./styled"
import axios from 'axios';


export default function Results(props) {
    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    
    useEffect(() => {
        async function getuser(){
            const { match: { params } } = props;
            const name = params.name;
            await axios.get(` https://api.github.com/users/${name}`)
                .then(data => setUser(data.data)
            )
        }
        async function getRepos(){
            const { match: { params } } = props;
            const name = params.name;
            await axios.get(`https://api.github.com/users/${name}/repos`)
                .then(data => {
                    return setRepos(data.data)
                }
            )
            
        }
        getuser()
        getRepos()
        
    }, [props])
    

    return (
        <div className="container__wrapper">
            <Sidebar/>
            <Content>
                <Header/>
                <Main>
                    <Span><strong>Detalhes de:</strong> {user.login}</Span>
                    <Block>
                        <Side>
                            <Avatar>
                                <img src={user.avatar_url} alt={user.login}/>
                            </Avatar>
                            <Span><strong>Seguidores:</strong> {user.followers}</Span>
                            <Span><strong>Seguindo:</strong> {user.following}</Span>
                            <Span>{user.email}</Span>
                            <Span marginTop={20}><small>{user.bio}</small></Span>
                        </Side>
                        <Lista>
                            {repos.map((item, index) => (
                                <Repo key={index}>
                                    <Span>{item.name}</Span>
                                    <a href={item.html_url} target="_blank" rel="noopener noreferrer">ver no GitHub</a>
                                </Repo>
                            ))}
                        </Lista>
                    </Block>
                </Main>
                <Footer/>
            </Content>
        </div>
    );
}