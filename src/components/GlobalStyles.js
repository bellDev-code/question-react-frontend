import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import HiMelody from "../fonts/HiMelody-Regular.ttf";

const GlobalStyles = createGlobalStyle`
     ${reset};
    @font-face {
        font-family: 'HiMelody';
        src: local('HiMelody'), url(${HiMelody});
    }
     a{
         text-decoration:none;
         color:inherit;
     }
 `;

export default GlobalStyles;
