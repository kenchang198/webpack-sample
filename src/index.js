// import bar from './bar.js';

// // CommonJS形式
// const foo = require('./foo');

// bar();
// foo();

// React SAMPLE
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <h1>HELLO! React. </h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));