import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContent } from "./content/ContentApi";
import "./index.css";
import { BrowserRouter } from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContent>
      <App />
    </AppContent>
    </BrowserRouter>
  </React.StrictMode>
);
