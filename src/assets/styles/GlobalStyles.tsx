import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
--accentGreen: ${({ theme }) => theme.accentGreen};
--lightGreen: ${({ theme }) => theme.lightGreen};
--white: ${({ theme }) => theme.white};
--black:${({ theme }) => theme.black};
--light:${({ theme }) => theme.light};
--warning:${({ theme }) => theme.warning};
--error:${({ theme }) => theme.error};
--success:${({ theme }) => theme.success};
--dark:${({ theme }) => theme.dark};
--lightDark:${({ theme }) => theme.lightDark};
--grey:${({ theme }) => theme.grey};
--titleCommon:${({ theme }) => theme.titleCommon};
--subtitleCommon:${({ theme }) => theme.subtitleCommon};
--background:${({ theme }) => theme.background};
--lightBg:${({ theme }) => theme.lightBg};
--fill:${({ theme }) => theme.fill};
--mainText:${({ theme }) => theme.mainText};
--title:${({ theme }) => theme.title};
--subtitle:${({ theme }) => theme.subtitle};
--strokes:${({ theme }) => theme.strokes};
--heroInput:${({ theme }) => theme.heroInput};
--scrollbar:${({ theme }) => theme.scrollbar};
--paginationItem:${({ theme }) => theme.paginationItem};
--paginationBg:${({ theme }) => theme.paginationBg};
--paginationArrow:${({ theme }) => theme.paginationArrow};
--paginationActiveBg:${({ theme }) => theme.paginationActiveBg};
--paginationActiveText:${({ theme }) => theme.paginationActiveText};
--selectBg:${({ theme }) => theme.selectBg};
--easedTransition:${({ theme }) => theme.easedTransition};
--footerBg:${({ theme }) => theme.footerBg};
--footerButton:${({ theme }) => theme.footerButton}
}

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
  color: var(--mainText);
  background-color: var(--background);
  transition: background-color var(--easedTransition), color var(--easedTransition);
  scrollbar-width: thin;
  scrollbar-color: var(--accentGreen);
  overflow-x: hidden;
  position: relative; 
  min-height: 100vh;
}

 ::-webkit-scrollbar {
  width: 10px;
} 

::-webkit-scrollbar-thumb {
  border-radius:10px;
  background-color: var(--accentGreen);
}

::-webkit-scrollbar-track {
  background-color: var(--mainText);
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
