import React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';
import '../styles/layout.css';


export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav className="NavElements">
          <h1 className="NavTitle">SISTEMA CLASIFICADOR DE GALAXIAS</h1>
          <section className="NavButtons">
            <Link styles='NavSpace' to='/galaxy-info' label='SOBRE LAS GALAXIAS' />
            <Link styles='NavSpace' to='/about' label='NOSOTROS' />
          </section>
        </nav>
        <section className="InstitutionalImagesContainer">
        </section>
      </header>
      <div className="Container">
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};