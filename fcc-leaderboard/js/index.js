"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recent_url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
var all_time_url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

$.getJSON(recent_url, function (json) {
  ReactDOM.render(React.createElement(CamperList, { items: json }), document.getElementById('fill'));
});

var Camper = function (_React$Component) {
  _inherits(Camper, _React$Component);

  function Camper() {
    _classCallCheck(this, Camper);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Camper.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "block" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-sm-1" },
          this.props.slno
        ),
        React.createElement(
          "div",
          { className: "col-sm-5" },
          React.createElement("img", { src: this.props.img }),
          "  ",
          this.props.name
        ),
        React.createElement(
          "div",
          { className: "col-sm-3" },
          this.props.atp
        ),
        React.createElement(
          "div",
          { className: "col-sm-3" },
          this.props.ptd
        )
      ),
      React.createElement("hr", null)
    );
  };

  return Camper;
}(React.Component);

var CamperList = function (_React$Component2) {
  _inherits(CamperList, _React$Component2);

  function CamperList() {
    _classCallCheck(this, CamperList);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  CamperList.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      this.props.items.map(function (item, index) {
        return React.createElement(Camper, { slno: index + 1, name: item.username, atp: item.alltime, ptd: item.recent, img: item.img });
      })
    );
  };

  return CamperList;
}(React.Component);

$(".atp").click(function () {
  $.getJSON(all_time_url, function (json) {
    ReactDOM.render(React.createElement(CamperList, { items: json }), document.getElementById('fill'));
  });
  $(".atp").html('<b>All Time Points</b> <i class="fa fa-arrow-down"></i>');
  $(".ptd").html('Points in Last 30 Days');
});

$(".ptd").click(function () {
  $.getJSON(recent_url, function (json) {
    ReactDOM.render(React.createElement(CamperList, { items: json }), document.getElementById('fill'));
  });
  $(".atp").html('All Time Points');
  $(".ptd").html('<b>Points in Last 30 Days</b> <i class="fa fa-arrow-down"></i>');
});