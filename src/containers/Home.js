import React from 'react';
import Layout from './Layout';
import SelectOrDragImage from '../components/SelectOrDragImage';
import Link from '../components/Link';
import '../styles/home.css';
import { initialMessage } from '../media/strings.json';

export default function Home() {
  return (
    <Layout>
      <div className="HomeContainer">
        <section className="SelectImages">
          <SelectOrDragImage />
        </section>
        <section className="HomeSection">
          <article className="HomeArticle">
            <h1 style={{marginTop: '2%'}}>Acerca de este sitio</h1>
            <p style={{width: '95%', marginTop: '3%', textAlign: 'justify'}}>{initialMessage}</p>
            <section className="HomeButtons">
              <Link styles='BaseButton HomeButton' to='' label='PREDECIR'/>
              <Link styles='BaseButton HomeButton' to='' label='LIMPIAR'/>
            </section>
          </article>
        </section>
      </div>
    </Layout>
  );
}