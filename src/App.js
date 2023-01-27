import { useState } from "react";
function App() {
    // two way binding
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // const changeTitle = (e) => {
    //     setTitle(e.target.value);
    // };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log({ title, description });
    };

    return (
        <div className="App">
            <h3>Create Task</h3>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <button>Create Task</button>
            </form>
        </div>
    );
}

export default App;

// React -> Vitrual DOM === Real DOM
