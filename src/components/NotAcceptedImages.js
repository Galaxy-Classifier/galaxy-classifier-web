import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Modal from './Modal';

export default function NotAcceptedImagesModal(props) {
  const ContinueButton = <Button classes='MediumButton MarginRight' message='CONTINUAR' action={() => props.closeModal(false)} />;
  return (
    <Modal 
      styles='MediumModal'
      title='Sus imágenes no son válidas'
      actions={ContinueButton}
    >
      <p className='MarginLeft'>Elija otras imágenes, recuerde que los formatos válidos son png, jpg y jpeg.</p>
    </Modal>
  );
}

NotAcceptedImagesModal.propTypes = {
  closeModal: PropTypes.func,
};