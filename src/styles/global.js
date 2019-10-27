import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 2px;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #App {
    min-height: 100%;
   }

  body{
    background: #fff;
  }


 `;
