/*
 * ProjectsPage
 *
 * List all the features
 */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Button from 'components/Button';
import H1 from 'components/H1';
import Projects from 'components/Projects';
import { PROJECTS } from '../../projectsData';

// import styles from './styles.css';

export class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <H1>Projects</H1>
        <Projects projects={PROJECTS} />
        <Button handleRoute={() => this.props.changeRoute('/')}>{'Home'}</Button>
      </div>
    );
  }
}

ProjectsPage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(ProjectsPage);
