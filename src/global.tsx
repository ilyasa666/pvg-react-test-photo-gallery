import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }
  body {
  margin: 0;
  font-family: 'Poppins';
  background: linear-gradient(176.18deg, #DEDEFF 3.13%, #FFFFFF 50.98%, #DEDEFF 94.43%)
}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  } 

  // anything else you would like to include
`;

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Wrapper;
