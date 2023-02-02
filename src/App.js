import React, { useEffect, useState } from "react";

const App = () => {
    const [user, setUser] = useState("hi user...");
    const [admin, setAdmin] = useState("hi admin...");

    useEffect(() => {
        console.log("inside useEffect");

        return () => {
            console.log("deleting component...");
        };
    }, [admin]);

    const changeuser = () => {
        setUser("helloooo user...");
    };

    const changeadmin = () => {
        setAdmin("helloooo admin..");
    };

    return (
        <div>
            <h1>{user}</h1>
            <button onClick={changeuser}>change user</button>
            <hr />
            <h1>{admin}</h1>
            <button onClick={changeadmin}>change admin</button>
        </div>
    );
};

export default App;
