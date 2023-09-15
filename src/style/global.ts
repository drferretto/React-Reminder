import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #DBF227;
    --purple-600: #9FC131;
    --purple-900: #005C53;

    --font-black: #050505;
    --font-white: #FDEFD6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1000px) {font-size: 93.75%};
    @media(max-width: 720px) {font-size: 87.5%};
}
`;
