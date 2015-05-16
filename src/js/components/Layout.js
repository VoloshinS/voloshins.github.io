var React = require('react');
var mui = require('material-ui');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Menu = require('./Menu');
var injectTapEventPlugin = require("react-tap-event-plugin");
//router variables
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
//pages for router
var Welcome   = require('./pages/Welcome');
var Skills    = require('./pages/Skills');
var Interests = require('./pages/Interests');
var SocialActivity = require('./pages/SocialActivity');

injectTapEventPlugin();

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <div className='vs-container'>
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="welcome" handler={Welcome}/>
    <Route name="skills" handler={Skills}/>
    <Route name="interests" handler={Interests}/>
    <Route name="social-activity" handler={SocialActivity}/>
    <DefaultRoute handler={Welcome}/>
  </Route>
);

//Render page.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

module.exports = Layout;
