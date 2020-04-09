import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';
import '../styles/galaxies.css';

export default function GalaxyItem(props) {
  return (
    <article className='Flex GalaxyItem'>
      <Picture pictureElementClasses='Flex GalaxyPictureClass' classes='GalaxyImage' src={props.src} />
      <article className='Flex GalaxyItemArticle'>
        <h1>{props.title}</h1>
        <ul className='GalaxyItemList'>
          {props.info.map((info) => <li key={info.id}><p>{info.text}</p></li>)}
        </ul>
      </article>
    </article>
  );
}

GalaxyItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.array,
};