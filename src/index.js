import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from '@chakra-ui/react'

//TODO: Import and Add ChakraProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);


reportWebVitals();
