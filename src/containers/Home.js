import React, { useState } from 'react';
import Layout from './Layout';
import SelectOrDragImage from '../components/SelectOrDragImage';
import NotAcceptedImagesModal from '../components/NotAcceptedImages';
import '../styles/home.css';
import { initialMessage, selectImagesMessage, selectedImagesMessage } from '../media/strings.json';

function clearImageComponentState(setSelectedImages, setImages) {
  setSelectedImages(false);
  setImages([]);
  document.getElementById('SelectImageForm').reset();
}

function checkOpenTermsAndConditions(images, shouldDisplayNotCompliantImages, setOpenTermsAndConditions, setNotCompliantImages) {
  if (shouldDisplayNotCompliantImages) return;
  if (!images.length) {
    setNotCompliantImages(true);
    return;
  }
  setOpenTermsAndConditions(true);
}

export default function Home() {
  const [selectedImages, setSelectedImages] = useState(false);
  const [shouldOpenTermsAndConditions, setOpenTermsAndConditions] = useState(false);
  const [shouldDisplayNotCompliantImages, setNotCompliantImages] = useState(false);
  const [images, setImages] = useState([]);

  let containerMessage = selectImagesMessage;

  if (selectedImages) containerMessage = selectedImagesMessage;
  return (
    <Layout>
      <div className="HomeContainer">
        <section className="SelectImages">
          <SelectOrDragImage 
            setSelectedImages={setSelectedImages}
            containerMessage={containerMessage}
            setNotCompliantImages={setNotCompliantImages}
            setImages={setImages}
            images={images}
          />
        </section>
        <section className="HomeSection">
          <article className="HomeArticle">
            <h1 style={{marginTop: '2%'}}>Acerca de este sitio</h1>
            <p style={{width: '95%', marginTop: '3%', textAlign: 'justify'}}>{initialMessage}</p>
            <section className="HomeButtons">
              <button className="BaseButton HomeButton" onClick={() => clearImageComponentState(setSelectedImages, setImages)}>LIMPIAR</button>
              <button className="BaseButton HomeButton" onClick={() => checkOpenTermsAndConditions(images, shouldDisplayNotCompliantImages, setOpenTermsAndConditions, setNotCompliantImages)}>PREDECIR</button>
            </section>
          </article>
        </section>
      </div>
      { shouldOpenTermsAndConditions ? 
        <div>Terms and conditions modal!</div> : 
        null }
      { shouldDisplayNotCompliantImages ? 
        <NotAcceptedImagesModal closeModal={setNotCompliantImages} /> : 
        null }
    </Layout>
  );
}