import React from 'react';
import Picture from './Picture';
import '../styles/galaxies.css';

export default function GalaxyItem(props) {
  return (
    <article className='GalaxyItem'>
      <Picture pictureElementClasses='GalaxyPictureClass' classes='GalaxyImage' src={props.src} />
      <article className='GalaxyItemArticle'>
        <h1>{props.title}</h1>
        <ul className='GalaxyItemList'>
          {props.info.map((info) => <li key={info.id}><p>{info.text}</p></li>)}
        </ul>
      </article>
    </article>
  );
}