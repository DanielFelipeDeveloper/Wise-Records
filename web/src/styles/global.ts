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
    background: rgba(2, 2, 2);
    -webkit-font-smoothing: antialiased!important;
    text-rendering: optimizeLegibility!important;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  #root {
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }
  button {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 0.625rem;
  }
  ::-webkit-scrollbar-track {
    background: #050505;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #6900ff, #8926d4);
    border-radius: 3px;
  }
`;
