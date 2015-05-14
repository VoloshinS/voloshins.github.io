var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;

var Menu = React.createClass({
  render: function() {

    return (
      <div>
        <AppBar 
          title="Voloshin Sergey - Frontender" 
          onMenuIconButtonTouchTap={this.props.toggleLeftBar} />
      </div>
    );
  }

});

module.exports = Menu;

