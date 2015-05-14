var React = require('react');
var TopMenu = require('./TopMenu');
var Welcome = require('./pages/Welcome');
var mui = require('material-ui');
var FontIcon = mui.FontIcon;

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <TopMenu />
        <div className='vs-container'>
          <Welcome />
        </div>
      </div>
    );
  }
});

module.exports = Layout;
