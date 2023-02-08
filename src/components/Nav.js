import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="list-group w-50">
            <h3 className="fw-light">Navigation</h3>
            <NavLink
                style={(e) => (e.isActive ? { color: "red" } : {})}
                className="list-group-item"
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(e) => (e.isActive ? { color: "red" } : {})}
                className="list-group-item"
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                style={(e) => (e.isActive ? { color: "red" } : {})}
                className="list-group-item"
                to="/user"
            >
                User
            </NavLink>
        </nav>
    );
};

export default Nav;
