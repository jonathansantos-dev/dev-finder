import React from "react";
import LogoImg from "../../assets/img/logo.png"

import { Logo } from "./styled" 
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Link to="/">
                <Logo src={LogoImg} alt="Logo dev finder" title="Logo dev finder"/>
            </Link>
        </div>
    );
}