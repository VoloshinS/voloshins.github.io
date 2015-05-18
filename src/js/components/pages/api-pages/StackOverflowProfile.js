var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var $ = require('jquery');

var StackOverflowProfile = React.createClass({

  _loadData: function() {
    var url ="https://api.stackexchange.com/2.2/users/3326919?order=desc&sort=reputation&site=stackoverflow"
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
      data: {}
    };
  },

  render: function() {

    var data = this.state.data;
    var items, created_at, reputation, bronze, silver, gold;
    if (data.items) {
      items = data.items[0];
      var formattedDate = new Date(items.creation_date*1000);
      var d = formattedDate.getDate();
      var m =  formattedDate.getMonth()+1;
      var y = formattedDate.getFullYear();
      created_at = d + "." + m + "." + y;

      reputation = items.reputation;
      bronze = items.badge_counts.bronze;
      silver = items.badge_counts.silver;
      gold = items.badge_counts.gold;
    }
    return (
      <Paper>
        <h4>StackOverflow:</h4>
        Account created: {created_at}<br/>
        My reputation: {reputation}<br/>
        Bronze badges: {bronze}<br/>
        Silver badges: {silver}<br/>
        Golden badges: {gold}<br/>
      </Paper>
    );
  }

});

module.exports = StackOverflowProfile;
