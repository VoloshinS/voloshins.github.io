var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Welcome = React.createClass({
  render: function() {
    return (
      <Paper innerClassName='vs-page'>
        <h1>Nice to see you!</h1>
        <p className='mui-font-style-headline'>
          Here you will get possibility to know something about:
          <ul className='vs-page-ul mui-font-style-headline'>
            <li><a href='#portfolio'>My works</a></li>
            <li><a href='#skills'>My skills</a></li>
            <li><a href='#interests'>My interests</a></li>
            <li><a href='#social-activity'>My social activity</a></li>
          </ul>
          <h1 className='vs-reconsraction'>SITE UNDER RECONSTRACTION!</h1>
        </p>
      </Paper>
    );
  }
});

module.exports = Welcome;
