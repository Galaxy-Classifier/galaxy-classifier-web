import React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';
import Picture from '../components/Picture';
import ITCuliacanSRC from '../media/itculiacanlogo.json';
import TECNMSrc from '../media/tecnmlogo.json';
import SEPSrc from '../media/seplogo.json';
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
          <Picture classes='BannerImages' src={SEPSrc} />
          <Picture classes='BannerImages BannerSpacing' src={TECNMSrc} />
          <Picture classes='BannerImages BannerSpacing' src={ITCuliacanSRC} />
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