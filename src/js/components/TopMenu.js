var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;

var Menu = React.createClass({
  render: function() {

    return (
      <div>
        <AppBar className="mui-dark-theme" title="Voloshin Sergey - Frontender"/>
      </div>
    );
  }

});

module.exports = Menu;
