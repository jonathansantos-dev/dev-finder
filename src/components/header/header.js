import React from "react";
import LogoImg from "../../assets/img/logo.png"

import { Logo } from "./styled"

export default function Header() {
    return (
        <div>
            <Logo src={LogoImg} alt="Logo dev finder" title="Logo dev finder"/>
        </div>
    );
}