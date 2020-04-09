import React from 'react';
import Layout from '../containers/Layout';
import GalaxyItem from './GalaxyItem';
import { galaxies } from '../data/galaxy_items.json';
import '../styles/galaxies.css';

export default function GalaxyInfo() {
  return (
    <Layout>
      <div className='GalaxyInfoContainer'>
        <div className='TitleContainer'>
          <h1 className='TitleElement'>TIPOS DE GALAXIAS</h1>
        </div>
        <section className='GalaxiesSection'>
          {galaxies.map(galaxy => <GalaxyItem key={galaxy.title} title={galaxy.title} src={galaxy.src} info={galaxy.info} />)}
        </section>
      </div>
    </Layout>
  );
}