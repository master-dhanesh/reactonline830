import { useAlert } from "react-alert";
import "./show.css";

const Show = (props) => {
    const alert = useAlert();
    const { tasks, setTasks } = props;
    const deletetask = (index) => {
        const copytasks = [...tasks];
        copytasks.splice(index, 1);
        setTasks(copytasks);
        alert.success("task removed!");
    };

    let tasklist = (
        <p className="mt-4 text-center text-success fs-4">task empty!</p>
    );

    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return (
                <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{task.title}</div>
                        {task.description}
                    </div>
                    <span
                        onClick={() => deletetask(index)}
                        className="px-3 adge bg-danger rounded-pill"
                    >
                        <i className="text-white fs-5 ri-delete-bin-7-line"></i>
                    </span>
                </li>
            );
        });
    }

    const stylep = {
        fontSize: "2vmax",
    };

    return (
        <ol className="list-group list-group-numbered">
            <h3 style={{ fontSize: "1.5vmax" }}>Task Lists</h3>
            <p style={stylep}>Lorem ipsum dolor sit amet.</p>
            {tasklist}
        </ol>
    );
};

export default Show;
