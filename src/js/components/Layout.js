var React = require('react');
var TopMenu = require('./TopMenu');
var LeftBar = require('./LeftBar');
var Welcome = require('./pages/Welcome');
var mui = require('material-ui');
var FontIcon = mui.FontIcon;

var Layout = React.createClass({
  getInitialState: function() {
    return {
      hideMenu: true
    };
  },


  _toggleLeftBar: function() {
    this.setState({
      hideMenu: !this.state.hideMenu
    });
  },

  render: function() {
    return (
      <div>
        <TopMenu toggleLeftBar={this._toggleLeftBar} />
        <LeftBar />
        <div className='vs-container'>
          <Welcome />
        </div>
      </div>
    );
  }
});

module.exports = Layout;
