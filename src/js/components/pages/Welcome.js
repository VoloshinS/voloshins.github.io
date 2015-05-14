var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Welcome = React.createClass({
  render: function() {
    return (
      <Paper innerClassName='vs-page'>
        <h1>Welcome to my portfolio!</h1>
        <p className='mui-font-style-headline'>
          Here you will get possibility to know something about:
          <ul className='vs-page-ul mui-font-style-headline'>
            <li><a href='#'>My works</a></li>
            <li><a href='#'>My skills</a></li>
            <li><a href='#'>My interests</a></li>
          </ul>
          <h1 className='vs-reconsraction'>SITE UNDER RECONSTRACTION!</h1>
        </p>
      </Paper>
    );
  }
});

module.exports = Welcome;
