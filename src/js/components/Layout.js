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
var Portfolio   = require('./pages/Portfolio');
var Skills    = require('./pages/Skills');
var Interests = require('./pages/Interests');
var SocialActivity = require('./pages/SocialActivity');

injectTapEventPlugin();

var Layout = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    return (
      <div>
        <Menu router={this.context.router}/>
        <div className='vs-container'>
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={Layout} >
    <Route name="Porfolio" path='/portfolio' handler={Portfolio} />
    <Route name="Skills" path='/skills' handler={Skills}/>
    <Route name="Interests" path='/interests' handler={Interests}/>
    <Route name="Social Activity" path='social-activity' handler={SocialActivity}/>
    <DefaultRoute handler={Welcome} />
  </Route>
);

//Render page.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

module.exports = Layout;
