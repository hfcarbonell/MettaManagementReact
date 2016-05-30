import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles/styles.module.css";
import "./styles/app.css";
import "font-awesome/css/font-awesome.css";

const App = React.createClass({
    render: function () {
        return (
            <div className={styles.wrapper}>
                <h1>
                    <i className="fa fa-star-half"></i>
                    Hello world {__NODE_ENV__}
                </h1>
            </div>
        );
    }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);