import React, { Component } from "react";

export default class Logged extends Component {
    render() {
        return (
            <div className="container aligner" id="logged">
                <span className="glyphicon glyphicon-ok green"></span>
                <span className="large-text">Succesful logged</span>
            </div>
        );
    }
}