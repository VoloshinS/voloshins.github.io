var React = require('react');
var LinkedInProfile = require('./api-pages/LinkedInProfile');
var GitHubProfile = require('./api-pages/GitHubProfile');
var StackOverflowProfile = require('./api-pages/StackOverflowProfile');
var TreeHouseProfile = require('./api-pages/TreeHouseProfile');


var SocialActivity = React.createClass({

  render: function() {
    return (
      <div className="vs-grid-wrapper">
        <GitHubProfile />
        <StackOverflowProfile />
      </div>
    );
  }

});

module.exports = SocialActivity;