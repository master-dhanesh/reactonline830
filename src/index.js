import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataContext>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </DataContext>
);
