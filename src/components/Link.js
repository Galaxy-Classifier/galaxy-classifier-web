import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/link.css';

export default function CustomLink(props) {
  const { to, label, styles } = props;
  const cssClasses = `BaseLink ${styles}`;
  return (
    <a className={cssClasses} >
      <Link to={to}>{label}</Link>
    </a>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  styles: PropTypes.string
};