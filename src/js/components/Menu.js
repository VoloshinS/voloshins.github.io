var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;

var Menu = React.createClass({
  _onLeftIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  },

  render: function() {
    var menuItems = [
      { type: MenuItem.Types.SUBHEADER, text: 'About me' },
      {
         type: MenuItem.Types.LINK,
         payload: '#welcome',
         text: 'Portfolio'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '#skills',
         text: 'Professional Skills'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '#interests',
         text: 'My Interests'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '#social-activity',
         text: 'My Social Activity'
      },
      { type: MenuItem.Types.SUBHEADER, text: 'My Social Pages' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/VoloshinS',
         text: 'GitHub'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://stackoverflow.com/users/3326919/voloshins',
         text: 'StackOverflow'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://teamtreehouse.com/sergeyvoloshin',
         text: 'TreeHouse'
      },
    ];

    return (
      <div>
        <AppBar
          title="Voloshin Sergey - Frontend Developer"
          onMenuIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
        <LeftNav ref="leftNav"
          docked={false}
          menuItems={menuItems} />
      </div>
    );
  }

});

module.exports = Menu;
