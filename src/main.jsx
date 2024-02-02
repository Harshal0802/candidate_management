import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CandidateProvider from "./context/CandidateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <CandidateProvider>
        <App />
      </CandidateProvider>
  </React.StrictMode>
);
