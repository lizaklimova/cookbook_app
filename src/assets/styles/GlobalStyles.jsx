import { createGlobalStyle } from 'styled-components';
import { topDesk2x, bottomDesk1x } from 'assets/images/background';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 1.29;
  margin: 0;
  color:white;
  background: 
  url(${topDesk2x}) no-repeat 0px 0px, 
  url(${bottomDesk1x}) no-repeat  bottom;
  background-color: black;
  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline:none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border:none;
}

svg {
  fill: currentColor;
}

::-webkit-scrollbar {
  /* width: ;  */
}


::-webkit-scrollbar-track {
  /* background-color: ;  */
}


/* ::-webkit-scrollbar-thumb {
  background-color: ; 
  border-radius: ; 
} */

/* * {
  scrollbar-width: thin; 
  scrollbar-color:; 
} */

`;
