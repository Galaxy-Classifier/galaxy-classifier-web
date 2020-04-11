import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Modal from './Modal';
import { welcome, whoCanUse, codeOfConduct, whatDoWeStore, whyDoWeStore, contact } from '../data/terms_and_conditions.json';

export default function TermsAndConditionsModal(props) {
  const actions = [
    <Button key='B1' action={() => props.closeModal(false)} classes='MediumButton MarginRight' message='REGRESAR' />,
    <Button key='B2' classes='MediumButton MarginRight' message='CONTINUAR' />
  ];
  return (
    <Modal 
      styles='BigModal'
      title='Términos y condiciones'
      actions={actions}
    >
      <section className='MarginLeft'>
        <article>
          <h2>{welcome.title}</h2>
          {welcome.content.map(item => <p key={item.id}>{item.message}</p>)}
        </article>
        <article className='MarginTop'>
          <h2>{whoCanUse.title}</h2>
          <p>{whoCanUse.content}</p>
        </article>
        <article className='MarginTop'>
          <h2>{codeOfConduct.title}</h2>
          <h3 className='MarginTop'>{codeOfConduct.listTitle}</h3>
          <ol>
            {codeOfConduct.content.map(item => <li key={item.id}><p>{item.message}</p></li>)}
          </ol>
        </article>
        <article className='MarginTop'>
          <h2>{whatDoWeStore.title}</h2>
          <p>{whatDoWeStore.content}</p>
        </article>
        <article className='MarginTop'>
          <h2>{whyDoWeStore.title}</h2>
          <ul>
            {whyDoWeStore.content.map(item => <li key={item.id}><p>{item.message}</p></li>)}
          </ul>
        </article>
        <article className='MarginTop'>
          <h2>{contact.title}</h2>
          <p>{contact.content}</p>
        </article>
      </section>
    </Modal>
  );
}

TermsAndConditionsModal.propTypes = {
  closeModal: PropTypes.func,
};