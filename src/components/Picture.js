import React from 'react';
import PropTypes from 'prop-types';

export default function Picture(props) {
  const { webpSmall, webpMedium, webpLarge, pngSmall, pngMedium, pngLarge, alt, defaultImage } = props;
  return (
    <picture>
      <source />
      <source />
      <source />
      <source />
      <source />
      <source />
      <img />
    </picture>
  );
}

Picture.propTypes = {
  webpSmall: PropTypes.string,
  webpMedium: PropTypes.string,
  webpLarge: PropTypes.string,
  pngSmall: PropTypes.string,
  pngMedium: PropTypes.string,
  pngLarge: PropTypes.string,
  alt: PropTypes.string,
  defaultImage: PropTypes.string
};