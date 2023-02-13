import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Detail from "./components/Detail";

import { toast } from "react-toastify";

const App = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div className="container mt-5">
            <Nav />
            <button className="my-3" onClick={notify}>
                Notify! Toast Example
            </button>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />}>
                    <Route path="/about/:name" element={<Detail />} />
                </Route>

                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
};

export default App;
