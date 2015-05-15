var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Interests = React.createClass({
  render: function() {
    return (
      <Paper innerClassName='vs-page'>
        <h1>My Interests</h1>
      </Paper>
    );
  }
});

module.exports = Interests;
