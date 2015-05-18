var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Skills = React.createClass({
  render: function() {
    return (
      <Paper innerClassName='vs-page'>
        <h1>My skills</h1>
        <h3>HTML</h3>
        <div>HTML4, HTML5, erb, haml, mustache, jade</div>
        <h3>CSS</h3>
        <div>CSS2, CSS3, sass, less, bootstrap, grids</div>
        <h3>JavaScript</h3>
        <div>ECMAScript 5, coffeescript, jquery, underscore, node, npm, react, gulp, grunt</div>
        <h3>Ruby</h3>
        <div>Ruby 2.0, Rails 4.0</div>
        <h3>Database</h3>
        <div>SQL, PostgreSQL</div>
      </Paper>
    );
  }
});

module.exports = Skills;
