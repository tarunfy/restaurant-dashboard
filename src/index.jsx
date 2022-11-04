import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { RestrauntProvider } from "./contexts/ResuarantsContext";
import { BrowserRouter } from "react-router-dom";

String.prototype.capitalise = function () {
  return this.substring(0, 1) + this.substring(1, this.length);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RestrauntProvider>
          <App />
        </RestrauntProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
