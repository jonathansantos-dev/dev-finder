import React, { useState } from "react";
import { Link } from 'react-router-dom'

import {Form, Label, Input} from "./styled"


export default function Search() {
    const [name, setName] = useState ('')

    function handleChange (e) {
        setName(e.target.value)
    }

    return (
        <Form >
            <Label>Busque por nome de usuário</Label>
            <Input placeholder="Digite aqui" onChange={(e) => handleChange(e)}/>
            <Link to={`/results?user=${name}`} type="submit">BUSCAR DEVS</Link>
        </Form>
    );
}