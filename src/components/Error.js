import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Modal from './Modal';

export default function Error(props) {
  const ContinueButton = <Button classes='MediumButton MarginRight' message='CONTINUAR' action={() => props.closeModal(false)} />;
  return (
    <Modal 
      styles='MediumModal'
      title='Ocurrió un error'
      actions={ContinueButton}
    >
      <section className='MarginLeft'>
        <p>Hubo un error con su petición. Probablemente nuestro servidor se encuentre muy atareado.</p>
        <p>Inténtelo de nuevo más tarde. En caso de que la falla persista, por favor contáctenos para poder solucionar el problema.</p>
      </section>
    </Modal>
  );
}

Error.propTypes = {
  closeModal: PropTypes.func,
};