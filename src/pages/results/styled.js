import styled from "styled-components"

export const Content = styled.div `
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
`
export const Main = styled.main `
    display: block;
    flex: 1 1 auto;
`

export const Span = styled.span `
    display: block;
    padding: 10px 0;
    font-size: 15px;
`

export const Lista = styled.ul `
    padding: 0;
    margin: 0;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
    padding-right: 10px;
    a {
        display: block;
        background-color: #0669b2;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        padding: 5px 10px;
        border: none;
        text-decoration: none;
    }
`

export const User = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 15px;
    border: 1px solid #cecece;
    padding: 10px;
    margin-bottom: 10px;
    span {
        flex: 1 1 auto;
    }
`

export const Avatar = styled.figure `
    display: block;
    max-width: 30px;
    margin: 0 15px 0 0;
    img {
        width: 100%;
    }
`