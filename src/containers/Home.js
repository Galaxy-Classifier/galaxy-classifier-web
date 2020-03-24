import React from 'react';
import Layout from './Layout';
import SelectOrDragImage from '../components/SelectOrDragImage';
import '../styles/home.css';

export default function Home() {
  return (
    <Layout>
      <div className="HomeContainer">
        <section className="SelectImages">
          <SelectOrDragImage />
        </section>
        <article className="HomeArticle">
          <h1>Acerca de este sitio</h1>
        </article>
      </div>
    </Layout>
  );
}