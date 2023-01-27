import { useState } from "react";
function App() {
    let [name, setName] = useState("John Doe");
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // let name = "John Doe";
    // console.log(name);

    const changeHandler = () => {
        console.log("Inside Function!");
        setName("Json smith");
        console.log(name);
    };

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div className="App">
            <h1>Name: {name}</h1>
            <p>{time}</p>
            <button onClick={changeHandler}>Change Name</button>
        </div>
    );
}

export default App;

// React -> Vitrual DOM === Real DOM
