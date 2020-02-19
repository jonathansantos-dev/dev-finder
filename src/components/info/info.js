import React from "react";

import { Span, Block } from "./styled"

export default function Info() {
    return (
        <div>
            <Block>
                <Span><strong>Desenvolvido por:</strong> Jonathan Castro dos Santos</Span>
                <Span><strong>GitHub:</strong> JonnyCSantos</Span>
                <Span><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/jonathan-santos-desenvolvedor-web/" target="_blank" rel="noopener noreferrer">/in/jonathan-santos-desenvolvedor-web/</a></Span>
            </Block>
        </div>
    );
}