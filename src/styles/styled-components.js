import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    height: 5rem;
    padding: 0 1rem;
    box-shadow: 1px 1px 1px 3px #808080;
    h1 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        margin: 0;
        display: flex;
        li {
            margin-right: 1rem;
            margin-bottom: 0;
        }
    }
`

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
`

export const StyledLayout = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    min-height: 100vh;
    & > div {
        flex-grow: 1;
    }
`