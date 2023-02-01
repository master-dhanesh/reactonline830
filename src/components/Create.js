import React, { useState } from "react";
import { useAlert } from "react-alert";
import css from "./create.module.css";

const Create = (props) => {
    const alert = useAlert();
    const { tasks, setTasks } = props;

    // two way binding
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const task = { title, description };

        if (!title.trim() || !description.trim()) {
            alert.info("no input field must be empty!");
            return;
        }

        setTasks([...tasks, task]);
        setTitle("");
        setDescription("");
        alert.success("task created!");
    };

    return (
        <form onSubmit={submitHandler}>
            <h3 className={css.fontsize}>Create Task</h3>
            <input
                className="form-control mb-3 w-50"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                className="form-control mb-3 w-50"
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button className="w-25 btn btn-dark">Create Task</button>
        </form>
    );
};

export default Create;
