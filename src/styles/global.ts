import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    :root{
        --skyBlue:
        --white:#D9FFFD;
        --darkGrey:#2D3333;
    }
    body {
        font-family: 'Oswald', sans-serif;
    }
    button{
        cursor: pointer;
        border:none;
        border-radius: 8px;
    }
`;
