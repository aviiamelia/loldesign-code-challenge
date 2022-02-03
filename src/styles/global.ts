import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    :root{
        --pinkGradient:linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(255,246,249,1) 43%, rgba(255,241,245,1) 51%, rgba(255,231,238,1) 60%, rgba(255,161,190,1) 100%);
        --white:#D9FFFD;
        --darkGrey:#2D3333;
        --red:#FF295A;
        --lightPink:#FF62BA;
        --lighterPink:#FFA7E2;
        --whitePink:#FAE7F2;
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
