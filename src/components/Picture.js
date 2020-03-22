import React from 'react';
import PropTypes from 'prop-types';
import '../styles/picture.css';

export default function Picture(props) {
  const { classes, src: { webpS, webpXS, webpM, webpL, pngS, pngXS, pngM, pngL, alt } } = props;
  return (
    <picture>
      <source type="image/webp" media="(min-width: 640px)" srcSet={webpXS} />
      <source type="image/webp" media="(min-width: 768px)" srcSet={webpS} />
      <source type="image/webp" media="(min-width: 1024px)" srcSet={webpM} />
      <source type="image/webp" media="(min-width: 1280px)"srcSet={webpL} />
      <source type="image/png" media="(min-width: 640px)" srcSet={pngXS} />
      <source type="image/png" media="(min-width: 768px)" srcSet={pngS} />
      <source type="image/png" media="(min-width: 1024px)" srcSet={pngM} />
      <source type="image/png" media="(min-width: 1280px)" srcSet={pngL} />
      <img className={classes} src={pngM} alt={alt} />
    </picture>
  );
}

Picture.propTypes = {
  webpS: PropTypes.string,
  webpXS: PropTypes.string,
  webpM: PropTypes.string,
  webpL: PropTypes.string,
  pngXS: PropTypes.string,
  pngS: PropTypes.string,
  pngM: PropTypes.string,
  pngL: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.object,
  classes: PropTypes.string,
};