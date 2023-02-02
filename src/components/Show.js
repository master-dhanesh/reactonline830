import React, { Component } from "react";

export default class Show extends Component {
    componentWillUnmount() {
        console.log("[show.js] componentwillunmount");
        window.confirm("want to leave this page ?");
    }
    render() {
        return <div>This is Show Component.</div>;
    }
}
