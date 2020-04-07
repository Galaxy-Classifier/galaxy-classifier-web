import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default function NotAcceptedImagesModal(props) {
  return (
    <Modal styles='SmallModal'>
      <section className='NotAcceptedImagesContent'>
        <h1 style={{marginLeft: '10px', marginTop: '10px'}}>Sus imágenes no son válidas.</h1>
        <p style={{marginLeft: '10px'}}>Elija otras imágenes, recuerde que los formatos válidos son png, jpg y jpeg.</p>
      </section>
      <section className='NotAcceptedImagesButtons'>
        <button className="BaseButton NotAcceptedImageButton" onClick={() => props.closeModal(false)}>
          CONTINUAR
        </button>
      </section>
    </Modal>
  );
}

NotAcceptedImagesModal.propTypes = {
  closeModal: PropTypes.func,
};