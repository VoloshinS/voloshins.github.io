/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { createSelector } from 'reselect';

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import A from 'components/A';
import Button from 'components/Button';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Row from 'components/Row';
import Column from 'components/Column';
import Projects from 'components/Projects';

import styles from './styles.css';
import storageIcon from './icons/storage.svg';
import bookIcon from './icons/book.svg';
import articleIcon from './icons/article.svg';

import { PROJECTS } from '../../projectsData';
export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <article>
        <div>
          <section className={`${styles.textSection}`}>
            <H2>{'Work'}</H2>
            <Projects projects={[PROJECTS[0]]} />
            <Button handleRoute={() => this.props.changeRoute('/projects')}>{'More Projects'}</Button>
          </section>
          <section className={`${styles.textSection}`}>
            <H2>Open Source</H2>
            <Row>
              <Column>
                <A target="blank" href="https://github.com/VoloshinS/simpleStorage" className={styles.card}>
                  <div className={styles.cardContent}>
                    <H3 className={`${styles.cardContentTitle} ${styles.cardContentTitleWithImage}`}>
                      <div
                        className={styles.cardContentTitleIcon}
                        style={{ backgroundImage: `url(${storageIcon})` }}
                      />
                      {'Simple Browser Storage'}
                    </H3>
                    <div className={styles.cardContentDescription}>
                      {'Module which allows to store application state in localStorage or Cookies (dependent on what is accessible for current browser)'}
                    </div>
                  </div>
                </A>
              </Column>
            </Row>
          </section>
          <section className={`${styles.textSection}`}>
            <H2>{'My Library'}</H2>
            <Row>
              <Column>
                <A to="/library" className={styles.card}>
                  <div className={styles.cardContent}>
                    <H3 className={`${styles.cardContentTitle} ${styles.cardContentTitleWithImage}`}>
                      <div className={styles.cardContentTitleIcon} style={{ backgroundImage: `url(${bookIcon})` }} />
                      {'100 books about JavaScript'}
                    </H3>
                    <div className={styles.cardContentDescription}>{'In 2016 I have made a resolution - constanly read books about JavaScript. Later this resolution transformed into a goal - complete 100 books about JavaScript. This section contains list of the books, which I have read and are going to read.'}</div>
                  </div>
                </A>
              </Column>
              <Column>
                <A to="/articles" className={styles.card}>
                  <div className={styles.cardContent}>
                    <H3 className={`${styles.cardContentTitle} ${styles.cardContentTitleWithImage}`}>
                      <div className={styles.cardContentTitleIcon} style={{ backgroundImage: `url(${articleIcon})` }} />
                      {'1000 articles about JavaScript'}
                    </H3>
                    <div className={styles.cardContentDescription}>{'In 2016 I have made another resolution - constanly read articles about JavaScript. Later this resolution transformed into a goal - complete 1000 articles about JavaScript. This section contains list of the articles, which I have read.'}</div>
                  </div>
                </A>
              </Column>
            </Row>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      evt.preventDefault();
      dispatch(loadRepos());
    },

    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  selectRepos(),
  selectUsername(),
  selectLoading(),
  selectError(),
  (repos, username, loading, error) => ({ repos, username, loading, error })
), mapDispatchToProps)(HomePage);
