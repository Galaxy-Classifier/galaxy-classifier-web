import React from 'react';
import '../styles/layout.css';


export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <h1>SISTEMA CLASIFICADOR DE GALAXIAS</h1>
        </nav>
        <section>
        </section>
      </header>
      <div>
        {children}
      </div>
    </>
  )
}