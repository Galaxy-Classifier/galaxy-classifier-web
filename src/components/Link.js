import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CustomLink(props) {
  const { to, label } = props;
  return (
    <div>
      <Link to={to}>{label}</Link>
    </div>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};