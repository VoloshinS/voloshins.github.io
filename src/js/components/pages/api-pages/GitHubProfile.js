var React = require('react');

var GitHubProfile = React.createClass({

  _loadData: function() {
    var url ="https://api.github.com/users/VoloshinS"
    $.ajax({
      url: url, 
      success: function(data){
        this.setState({data: data})
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this._loadData();
  },

  getInitialState: function() {
    return {
      data: [] 
    };
  },

  render: function() {
    
    var data = JSON.parse(this.state.data);
    var public_repos = data.public_repos;
    var public_gists = data.public_gists;
    var followers = data.followers;
    var following = data.following;
    var created_at = data.created_at;

    return (
      <Paper>
        <h2>GitHub Data:</h2>
        <p>Account created: {public_repos}</p>
        <p>Public repos: {public_repos}</p>
        <p>Public gists: {public_gists}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </Paper>
    );
  }
});

module.exports = GitHubProfile;