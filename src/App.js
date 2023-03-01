import React, { useEffect, useState } from "react";

const App = () => {
    const [dets, setDets] = useState(null);
    const data = async () => {
        let d = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let details = await d.json();
        setDets(details);
    };

    useEffect(() => {
        data();
    }, []);
    return (
        <div className="container mt-5 p-5 bg-light">
            <div className="alert alert-dark ">
                <h3>
                    {dets && dets.id} - {dets && dets.title}
                </h3>
            </div>
        </div>
    );
};

export default App;
