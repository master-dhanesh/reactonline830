import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

function App() {
    const [tasks, setTasks] = useState([]);
    return (
        <div className="container p-5">
            <Create tasks={tasks} setTasks={setTasks} />
            <hr />
            <Show tasks={tasks} setTasks={setTasks} />
        </div>
    );
}
export default App;
