import React from 'react';
import Layout from '../containers/Layout';
import InformativePage from './InformativePage';
import GalaxyItem from './GalaxyItem';
import { galaxies } from '../data/galaxy_items.json';
import '../styles/galaxies.css';

export default function GalaxyInfo() {
  return (
    <Layout>
      <InformativePage title='TIPOS DE GALAXIAS'>
        <section className='Flex GalaxiesSection'>
          {galaxies.map(galaxy => <GalaxyItem key={galaxy.title} title={galaxy.title} src={galaxy.src} info={galaxy.info} />)}
        </section>
      </InformativePage>
    </Layout>
  );
}