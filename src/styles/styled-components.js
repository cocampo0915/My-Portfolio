import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to right, #222, #fff);
    color: #444;
    height: 5rem;
    padding: 0 1rem;
    h1 {
        margin: 0;
        font-family: "Megrim" !important;
    }
    a {
        text-decoration: none;
        color: inherit;
        font-family: "Montserrat";
    }
    nav {
        display: flex;
        align-items: center;
    }
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        align-items: center;
        li {
            margin: 0 1rem 0 0;
            a {
                font-weight: 700;
            }
        }
    }
`

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    margin-bottom: 2rem;
    p {
        margin: 0;  
    }
`


export const StyledLayout = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    min-height: 100vh;
    & > div {
        flex-grow: 1;
        padding: 1rem;
    }
`
