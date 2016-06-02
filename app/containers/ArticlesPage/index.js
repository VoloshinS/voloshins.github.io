/*
 *
 * ArticlesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createSelector } from 'reselect';

import { secondsToFormat } from '../../utils/dateFormatter'

import {
  selectArticles,
} from './selectors';

import { loadArticles } from './actions';

import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import H3 from 'components/H3';
import Button from 'components/Button';

import styles from './styles.css';

class ArticlesPage extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  sortArticles(articles) {
    return articles.sort((a, b) => a.time_read < b.time_read);
  }

  render() {
    const { articles, changeRoute } = this.props;

    return (
      <div className={styles.articlesPage}>
        <H2>{'I am what I read'}</H2>
        <br />
        <p>{`Completed: ${articles.length || 0} / 1000`}</p>
        <br />
        <div className={styles.card}>
          {!articles ? <LoadingIndicator /> : this.sortArticles(articles).map(({
            resolved_url: url, word_count: count, image = {}, tags = {},
            resolved_title: title, excerpt, time_read: time,
          }, i) => (
            <a key={i} className={`${styles.cardItem} ${styles.cardItemWithImage}`} href={url}>
              <H3 className={styles.cardItemTitle}>
                <div className={styles.cardItemImage} style={{ backgroundImage: `url(${image.src})` }} />
                {title}
              </H3>

              <div className={styles.cardItemInfo}>
                <div>{`Read Date: ${secondsToFormat(time, 'mmmm dS, yyyy')} (${count} words)`}</div>
                <div>
                  {
                    Object.keys(tags).map((tag, j) => (
                      <span className={styles.tag} key={j}>{tag}</span>
                    ))
                  }
                </div>
              </div>
              <p>{excerpt}</p>
            </a>
          ))}
        </div>
        <Button handleRoute={() => changeRoute('/')}>{'Home'}</Button>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  // loading: React.PropTypes.bool,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
  articles: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  changeRoute: React.PropTypes.func,
  onComponentDidMount: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onComponentDidMount: () => { dispatch(loadArticles()); },
    changeRoute: (url) => dispatch(push(url)),

    dispatch,
  };
}

export default connect(createSelector(
  selectArticles(), (articles) => ({ articles })
), mapDispatchToProps)(ArticlesPage);
