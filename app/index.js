var React = require("react");
var ReactDom = require("react-dom");
require("./index.css");

// react component
class App extends React.Component {
  render() {
    return <div>Hello Justin!</div>;
  }
}

// render component to "app"
ReactDom.render(<App />, document.getElementById("app"));
