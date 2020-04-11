import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const classes = `BaseButton ${props.classes}`;
  return (
    <button
      className={classes}
      onClick={() => props.action()}
    >
      {props.message}
    </button>
  );
}

Button.propTypes = {
  message: PropTypes.string,
  action: PropTypes.func,
  classes: PropTypes.string,
};