var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var $ = require('jquery');

var GitHubProfile = React.createClass({

  _loadData: function() {
    var url ="https://api.github.com/users/VoloshinS";
    $.ajax({
      url: url, 
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(data){
        console.log('Data not recieved!')
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this._loadData();
  },

  getInitialState: function() {
    return {
      data: {}
    };
  },

  render: function() {
    var data = this.state.data;
    var created_at = data.created_at || 0;
    var public_repos = data.public_repos || 0;
    var public_gists = data.public_gists || 0;
    var followers = data.followers || 0;
    var following = data.following || 0;

    if (created_at) {
      var formattedDate = new Date(Date.parse(created_at));
      var d = formattedDate.getDate();
      var m =  formattedDate.getMonth()+1;
      var y = formattedDate.getFullYear();
      created_at = d + "." + m + "." + y;
    }

    return (
      <Paper>
        <h4>GitHub Data:</h4>
        Account created: {created_at}<br/>
        Public repos: {public_repos}<br/>
        Public gists: {public_gists}<br/>
        Followers: {followers}<br/>
        Following: {following}<br/>
      </Paper>
    );
  }
});

module.exports = GitHubProfile;