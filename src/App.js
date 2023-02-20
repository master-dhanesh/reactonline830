import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
};

export default App;
