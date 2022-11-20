import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    textarea:focus, input:focus, a:focus{
        outline: none;
    }

    // Ocultando o Scroll sem desativar
    ::-webkit-scrollbar {
        width: 0px;
    }

    // Declarando variaveis Globais
    :root{

        overflow-x: hidden;
        
        --bg-principal: #F7F7F7;
        --bg-secundaria: green;
        

    }
    // Reset Basico
    body, html {
        margin: 0;
        padding: 0;
        border: 0;
    }
`

export default GlobalStyle