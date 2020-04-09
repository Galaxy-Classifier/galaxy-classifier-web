import React from 'react';
import PropTypes from 'prop-types';
import '../styles/informative.css';

export default function InformativePage(props) {
  return (
    <article className='Flex InformativeArticle'>
      <div className='Flex InformativeArticleTitleContainer'>
        <h1 className='Flex InformativeArticleTitle'>{props.title}</h1>
      </div>
      <section className='Flex InformativeArticleItems'>
        {props.children}
      </section>
    </article>
  );
}

InformativePage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};