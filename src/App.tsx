import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteManager } from "./routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }

`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteManager />
    </BrowserRouter>
  );
}

export default App;
