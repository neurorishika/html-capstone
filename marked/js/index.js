"use strict";

var DisplayBox = React.createClass({
  displayName: "DisplayBox",

  _updater: function _updater(modified) {
    this.setState({ value: modified });
  },
  _markup: function _markup(inputs) {
    var ass = marked(inputs, { sanitize: true });
    return {
      __html: ass
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
  },

  render: function render() {
    console.log(this.state.value);
    return React.createElement(
      "div",
      { "class": "container-fluid" },
      React.createElement(
        "h1",
        null,
        "Marked"
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement(Input, { vals: this.state.value, updateMethod: this._updater })
        ),
        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement("span", { dangerouslySetInnerHTML: this._markup(this.state.value) })
        )
      )
    );
  }
});

var Input = React.createClass({
  displayName: "Input",
  getInitialState: function getInitialState() {
    console.log(this.props.vals);
    return {
      markup: this.props.vals
    };
  },

  _update: function _update(event) {
    this.setState({ markup: event.target.value });
    this.props.updateMethod(event.target.value);
  },
  render: function render() {
    return React.createElement("textarea", { value: this.state.markup, onChange: this._update.bind(this) });
  }
});

ReactDOM.render(React.createElement(DisplayBox, null), document.getElementById("container"));