import React from 'react';
import Layout from '../containers/Layout';
import InformativePage from './InformativePage';
import { stakeholders } from '../data/people.json';
import '../styles/about.css';

export default function About() {
  return (
    <Layout>
      <InformativePage title='ACERCA DE NOSOTROS'>
        <section className='Flex StakeholdersContainer'>
          {stakeholders.map(stakeholder => {
            const { name, lastName, role, email, id } = stakeholder;
            const emailRef = `mailto:${email}`;
            return (
              <article key={id} className='Flex StakeholderItem'>
                <h1 style={{textAlign: 'center', marginBottom: '1%'}}>{name} {lastName}</h1>
                <p>{role}</p>
                <a style={{color: 'black'}} href={emailRef}><p>{email}</p></a>
              </article>
            );
          })}
        </section>
        <section className='Flex StakeholdersAdscriptionSection'>
          <article className='Flex StakeholdersAdscriptionContainer'>
            <h1>Tecnológico Nacional de México</h1>
            <h2>Instituto Tecnológico de Culiacán</h2>
            <h2>División de Estudios de Posgrado e Investigación</h2>
          </article>
        </section>
      </InformativePage>
    </Layout>
  );
}