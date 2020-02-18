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
    font-size: 15px;
    margin-top: ${props => `${props.marginTop}px`};
    strong {
        font-weight: bold;
    }
`

export const Avatar = styled.figure `
    display: block;
    max-width: 200px;
    margin: 0;
    img {
        width: auto;
    }
`

export const Block = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const Side = styled.div `
    display: block;
    max-width: 200px;
    flex: 0 1 250px;
    img {
        width: 100%;
    }
`

export const Lista = styled.ul `
    padding: 0;
    margin: 0 0 0 20px;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
    padding-right: 10px;
    flex: 1 1 auto;
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

export const Repo = styled.li `
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

