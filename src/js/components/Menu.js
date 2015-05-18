var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;

var Menu = React.createClass({
  _onLeftIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  },

  _onLeftNavChange: function(e, key, payload) {
    this._onLeftNavClick(payload)
  },

  _onHeaderClick: function() {
    this._onLeftNavClick({route: '/', text: "Frontend Developer"})
  },

  _onLeftNavClick: function(payload) {
    this.props.router.transitionTo(payload.route);
    this.setState({
      menuTitle: "Voloshin Sergey - " + payload.text
    })
    this.refs.leftNav.close();
  },

  getInitialState: function() {
    return {
      menuTitle: "Voloshin Sergey - Frontend Developer",
    };
  },

  render: function() {
    var header = (
      <div className='mui-app-bar'>
        <a href='#' onClick={this._onHeaderClick} className='mui-app-bar-title vs-logo-title'>
          Voloshin Sergey
        </a>
      </div>
    );

    var menuItems = [
      {
         route: '/portfolio',
         text: 'Portfolio'
      },
      {
         route: '/skills',
         text: 'Professional Skills'
      },
      {
         route: '/interests',
         text: 'My Interests'
      },
      {
         route: '/social-activity',
         text: 'My Social Activity'
      },
      { type: MenuItem.Types.SUBHEADER, text: 'My Social Pages' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/VoloshinS',
         text: 'GitHub',
         target: 'blank'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://stackoverflow.com/users/3326919/voloshins',
         text: 'StackOverflow',
         target: 'blank'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://teamtreehouse.com/sergeyvoloshin',
         text: 'TreeHouse',
         target: 'blank'
      },
    ];

    return (
      <div>
        <AppBar
          title={this.state.menuTitle}
          onMenuIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
        <LeftNav ref="leftNav"
          docked={false}
          onChange={this._onLeftNavChange}
          header={header}
          menuItems={menuItems} />
      </div>
    );
  }

});

module.exports = Menu;
