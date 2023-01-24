import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
 box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  padding: 40px;
  margin: 0;
  background: linear-gradient(to right, #2b32b2, #1488cc);
  text-align: center;
}
p{
  margin: 10px 5px;
}
button {
  font-size: 18px;
  cursor: pointer;
}
`


export default GlobalStyles;