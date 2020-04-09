import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';

export default function Modal(props) {
  const classNames = `Flex ModalContainer ${props.styles}`;
  return (
    <div className='Flex Overlay'>
      <div className={classNames}>
        {props.children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.node,
};