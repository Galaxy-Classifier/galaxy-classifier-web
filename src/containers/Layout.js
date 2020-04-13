import React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';
import Picture from '../components/Picture';
import ITCuliacanSRC from '../data/itculiacanlogo.json';
import TECNMSrc from '../data/tecnmlogo.json';
import SEPSrc from '../data/seplogo.json';
import '../styles/layout.css';


export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav className="Flex NavElements">
          <h1 className="MarginLeft NavTitle">SISTEMA CLASIFICADOR DE GALAXIAS</h1>
          <section className="Flex MarginRight">
            <Link styles='MarginRight' to='/galaxy-info' label='SOBRE LAS GALAXIAS' />
            <Link styles='MarginRight' to='/about' label='NOSOTROS' />
          </section>
        </nav>
        <section className="MarginLeft Flex InstitutionalImagesContainer">
          <Picture classes='BannerImages' src={SEPSrc} />
          <Picture classes='MarginLeft BannerImages' src={TECNMSrc} />
          <Picture classes='MarginLeft BannerImages' src={ITCuliacanSRC} />
        </section>
      </header>
      <div className="Flex Container">
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};