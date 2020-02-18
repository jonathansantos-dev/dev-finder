import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import {Form, Label, Input, Button} from "./styled"


export default function Search() {
    const [name, setName] = useState ('')
    const history = useHistory()

    function handleChange (e) {
        setName(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        history.push(`/results/${name}`)
        
    }

    return (
        <Form onSubmit={handleSubmit}>
        {/* <Form> */}
            <Label>Busque por nome de usuário</Label>
            <Input placeholder="Digite aqui" onChange={(e) => handleChange(e)}/>
            <Button type="submit">BUSCAR DEVS</Button>
            {/* <Link to={`/results/${name}`}>BUSCAR DEVS</Link> */}
        </Form>
    );
}