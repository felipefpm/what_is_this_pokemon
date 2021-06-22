import { createGlobalStyle } from 'styled-components';

export const GLobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-image: linear-gradient( 109.6deg,  rgba(255,174,0,1) 11.2%, rgba(255,0,0,1) 100.2% );
    }
`;