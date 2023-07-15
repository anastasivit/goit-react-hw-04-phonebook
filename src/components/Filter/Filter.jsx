import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search contacts"
  />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
