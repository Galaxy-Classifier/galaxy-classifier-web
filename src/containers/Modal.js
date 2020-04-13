import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';

export default function Modal(props) {
  const classNames = `Flex ModalContainer ${props.styles}`;
  return (
    <div className='Flex Overlay'>
      <div className={classNames}>
        <article className='Flex ModalTitle'>
          <h1 className='MarginLeft'>{props.title}</h1>
        </article>
        <div className='ModalContent Overflow'>
          {props.children}
        </div>
        <section className='Flex ModalActions'>
          {props.actions}
        </section>
      </div>
    </div>
  );
}

Modal.propTypes = {
  styles: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node,
};