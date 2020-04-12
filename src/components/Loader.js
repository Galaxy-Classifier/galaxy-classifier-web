import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders';
 
export default function CustomLoader(props) {
  return (
    <div className='Flex Overlay'>
      <Loader style={{transform: 'scale(2)'}} color={props.color} type={props.loaderType} active />
    </div>
  );
}

CustomLoader.propTypes = {
  color: PropTypes.string,
  loaderType: PropTypes.string,
};