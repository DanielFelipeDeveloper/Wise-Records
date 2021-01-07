import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    background: #000;
    -webkit-font-smoothing: antialiased!important;
    text-rendering: optimizeLegibility!important;
  }

  #root {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #050505;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #6900ff, #8926d4);
    border-radius: 3px;
  }
`;
