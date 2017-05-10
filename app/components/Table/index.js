/**
*
* Table
*
*/

import React from 'react';

import A from '../A';

import styles from './styles.css';

function Table({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>No</th>
          <th className={styles.th}>Title</th>
          <th className={styles.th}>Author</th>
          <th className={styles.th}>Year</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ title, link, year, author, status }, i) => (
          <tr key={i}>
            <td className={styles.td}>{i + 1}</td>
            <td className={styles.td}>
              <A href={link} target="blank">
                {title}
              </A>
            </td>
            <td className={styles.td}>{author}</td>
            <td className={styles.td}>{year}</td>
            <td className={styles.td}>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Table;
