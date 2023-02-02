import React, { Component } from "react";
import Show from "./components/Show";

class App extends Component {
    // there is no constructor
    // state = "asdas";

    constructor(props) {
        // to init the state data
        super(props);
        this.state = {
            image: [],
            show: false,
        };
        console.log("[app.js] constructor");
    }

    render() {
        // to load the view(html/css) without original data
        // whenever the state changes(data arrives) the render will update/reset/refresh
        console.log("[app.js] render");
        return (
            <div>
                <h1>This is App.js</h1>
                {this.state.show ? <Show /> : "Click to show"}
                <button
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    Click
                </button>
            </div>
        );
    }

    componentDidMount() {
        // runs one in a lifetime when the component created
        // to call the data from backend/ajax and set to the state
        console.log("[app.js] componentdidmount");

        fetch("https://picsum.photos/v2/list")
            .then((d) => d.json())
            .then((data) => {
                console.log(data);
                this.setState({ images: data });
            })
            .catch((err) => console.log(err));
    }

    // ---------------------------------------------------------------

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        console.log("[app.js] componentdidupdate");
    }
}

export default App;
