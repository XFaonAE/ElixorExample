import React from "react";
import ReactDOM from "react-dom";

new class Main() {
    public constructor() {
        this.#render();
    }

    #render() {
        ReactDOM.render(
            <h1>Hello World!</h1>,
            document.querySelector("#__elixor__")
        );
    }
}
