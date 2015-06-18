var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Portfolio = React.createClass({
  render: function() {
    var projectsData = [
      {
        url: 'http://nowshop.com',
        thumbUrl: 'public/images/projects/nowshop.jpg',
        title: 'NowShop'
      },
      {
        url: 'http://shop.countryliving.co.uk',
        thumbUrl: 'public/images/projects/countryliving.jpg',
        title: 'Countryliving shop'
      },
      {
        url: 'http://evilgeniuses.ru/',
        thumbUrl: 'public/images/projects/evilgeniuses.jpg',
        title: 'WOT clan site'
      },
      {
        url: 'http://tango-store.com',
        thumbUrl: 'public/images/projects/tango.jpg',
        title: 'Tango store'
      },
    ]


    var projects = projectsData.map(function(project, indx){
      return <Project key={indx} project={project} />
    })
    return (
      <Paper innerClassName='vs-page'>
        <h1>Some of my previous projects and works:</h1>
        <div className='mui-font-style-headline vs-grid-wrapper'>
          {projects}
        </div>
      </Paper>
    );
  }
});

var Project = React.createClass({
  render: function() {
    var project = this.props.project;

    return (
      <a href={project.url} target='blank'>
        <h4>{project.title}</h4>
        <img src={project.thumbUrl} alt={project.title} />
      </a>
    );
  }
});

module.exports = Portfolio;
