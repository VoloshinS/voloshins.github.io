/**
*
* Projects
*
*/

import React, { PropTypes } from 'react';

import A from 'components/A';
import Row from 'components/Row';
import Column from 'components/Column';

import styles from './styles.css';

export function Project({ thumb, title, description, dates, url = '#' }) {
  return (
    <Column>
      <a href={url} target="_blank" className={styles.imageCard} style={{ backgroundImage: `url(${thumb})` }}>
        <div className={styles.imageCardInfo}>
          <h4 className={styles.imageCardInfoTitle}>{title}</h4>
          <p className={styles.imageCardInfoInfo}>{dates}</p>
          <p className={styles.imageCardInfoDescription}>{description}</p>
        </div>
      </a>
    </Column>
  );
}

Project.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  dates: PropTypes.string,
  url: PropTypes.string,
};

function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      {
        projects.map((row, i) => (
          <Row key={i}>
            {row.map((project, j) => (<Project {...project} key={j} />))}
          </Row>
        ))
      }
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
};

export default Projects;
