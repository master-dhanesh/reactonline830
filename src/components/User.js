import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();

    const submituser = (e) => {
        e.preventDefault();
        // logic to send data to db
        navigate("/about");
    };
    return (
        <>
            <form onSubmit={submituser}>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="password" />
                <button>Submit</button>
            </form>
        </>
    );
};

export default User;
