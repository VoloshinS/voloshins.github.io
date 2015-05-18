var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Interests = React.createClass({
  render: function() {
    return (
      <Paper innerClassName='vs-page'>
        <h1>My Interests</h1>
        <h3>Programming</h3>
        <div>New jS libraries, task runners, project generators. Reading about them, trying them at private projets etc.</div>
        <h3>English</h3>
        <div>Styding english with lingualeo.com, reading theguardian.com (at least one article per day), watching BBC news (at least 20 minutes in the morning), watching american tv series and cartoons, english courses in current company.</div>
        <h3>Gym, workout</h3>
        <div>Two times per week visitng gym, everymorning abs workout, squats and push-ups.</div>
      </Paper>
    );
  }
});

module.exports = Interests;
