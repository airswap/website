import React from 'react';
import { createGlobalStyle, ThemeProvider as BaseThemeProvider } from 'styled-components';
import reset from 'styled-reset';

import theme from '../theme';

const BaseStyles = createGlobalStyle`
  ${reset}
  div {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
    overflow-x: hidden;
  }
  html, body {
    background-color: #1A1B1E;
    color: #FFFFFF;
    cursor: default;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  *,
  div,
  span,
  p,
  a,
  button {
    font-family: ${theme.text.fontFamily};
    letter-spacing: 0.5px;

    ::selection {
        background: #2b71ff; /*AirSwap Blue*/
      }

    ::-moz-selection {
        background: #2b71ff; /*AirSwap Blue*/
      }
  }
  body {
    font-family: ${theme.text.fontFamily};
    margin: 0;
    padding: 0;
    line-height: 1.33;
    overflow-x: hidden;
  }
  .fw-normal {
    font-weight: normal !important;
  }
  .fw-medium {
    font-weight: 500 !important;
  }
  .fw-bold {
    font-weight: 700 !important;
  }
  .ml-text {
    margin-left: 5px;
  }
  .mr-text {
    margin-right: 5px;
  }
  .token-selector-list {
    margin-top: 20px;
  }
  .dot-flashing {
  position: relative;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #555;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: .5s;
}

.dot-flashing::before, .dot-flashing::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-flashing::before {
  left: -5px;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #555;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}

.dot-flashing::after {
  left: 5px;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #555;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dot-flashing {
  0% {
    background-color: #555;
  }
  50%,
  100% {
    background-color: #eee;
  }
}
`;

theme.palette.borderColor = '#E5E5E5';

const Theme = Component => props => (
  <BaseThemeProvider theme={theme}>
    <>
      <Component {...props} />
      <BaseStyles />
    </>
  </BaseThemeProvider>
);

export default Theme;
