import React from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/animation.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
