var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var $ = require('jquery');

var StackOverflowProfile = React.createClass({

  _loadData: function() {
    var url ="https://api.linkedin.com/v1/people/~:(skills,num-connections,picture-url)?oauth2_access_token=AQVXAoNRAoG0NUgkXtPwF-RZpUbmD3YbgImnzMEW6rmv0zC3rhmryAjY_WHoO1wg1IyN7CrxTvTsNK_nuC2ttR9YXI359rB8SrKn4PPLbqyRJq-LKyJb2Cze49dnfZU73bOqcvP3pGD8n4xRjU6LZl07q5nwbSjYJyt1YEYzx3AKaKZ8uoA&format=json"
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
    
    var data = this.state.data;
    var connects = data ? 'I have ' + data.numConnections + ' connections in my account.' : 'Not recieve data'
    var skills = '';
    if (data.skills) {
      skills = data.skills.values.map(function(chunk){
        return (<div>{chunk.skill.name}</div>);
      })
    }

    return (
      <Paper>
        <h2>Linked In Data:</h2>
        <p>{connects}</p>
        <p>Skills from my account:</p>
        <p>{skills}</p>
      </Paper>
    );
  }

});

module.exports = StackOverflowProfile;