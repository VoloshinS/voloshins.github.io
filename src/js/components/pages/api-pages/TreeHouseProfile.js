var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var $ = require('jquery');

var TreeHouseProfile = React.createClass({

  _loadData: function() {
    var url ="https://teamtreehouse.com/sergeyvoloshin.json";
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
    var badges, total, JavaScript, HTML, CSS;
    if (data.badges) {
      badges = data.badges.length || 0;
      total = data.points.total || 0;
      JavaScript = data.points.JavaScript || 0;
      HTML = data.points.HTML || 0;
      CSS = data.points.CSS || 0;
    }

    return (
      <Paper>
        <h4>TreeHouse:</h4>
        Achived badges: {badges}<br/>
        JavaScript: {JavaScript}<br/>
        HTML: {HTML}<br/>
        CSS: {CSS}<br/>
        Total: {total}<br/>
      </Paper>
    );
  }
});

module.exports = TreeHouseProfile;
