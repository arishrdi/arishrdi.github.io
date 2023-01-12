import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";
import Pointer from "./components/Pointer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Pointer /> */}
    <App />
    {/* <Footer /> */}
  </React.StrictMode>,
);
