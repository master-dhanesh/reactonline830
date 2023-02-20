import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/signup">Click To Register Yourself</Link> <br />
            <Link to="/signin">Click To Login Yourself</Link>
        </div>
    );
};

export default Home;
