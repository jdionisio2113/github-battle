var React = require("react");
var ReactDom = require("react-dom");
require("./index.css");

// react component
var App = require("./components/App");

// render component to "app"
ReactDom.render(<App />, document.getElementById("app"));
