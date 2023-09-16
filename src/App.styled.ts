import styled, { createGlobalStyle } from "styled-components";

import { HEADER_HEIGHT, FOOTER_HEIGHT } from "consts";
import colors from "consts/colors";

export const AppGlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
  }

  *, *::after, *:before {
    box-sizing: border-box;
  }

`;

export const PageWrapper = styled.div`
  padding: 20px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

export const Footer = styled.footer`
  padding: 14px 20px;
  height: ${FOOTER_HEIGHT}px;
  background-color: ${colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
`;
