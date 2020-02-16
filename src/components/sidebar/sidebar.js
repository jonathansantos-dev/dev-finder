import React from "react";
import Search from "../search/search"
import Info from "../info/info"

import {Sidebar} from "./styled"

export default function Header() {
    return (
        <Sidebar>
            <Search/>
            <Info/>
        </Sidebar>
    );
}