import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="list-group">
                <Link className="list-group-item" to="/about/Rahul">
                    Rahul
                </Link>
                <Link className="list-group-item" to="/about/Chanchal">
                    Chanchal
                </Link>
                <Link className="list-group-item" to="/about/Durgesh">
                    Durgesh
                </Link>
                <Link className="list-group-item" to="/about/Souvik">
                    Souvik
                </Link>
            </div>
            <hr />
            <Outlet />
        </>
    );
};

export default About;
