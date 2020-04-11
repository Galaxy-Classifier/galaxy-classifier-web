import React, { useState } from 'react';
import Layout from './Layout';
import SelectOrDragImage from '../components/SelectOrDragImage';
import NotAcceptedImagesModal from '../components/NotAcceptedImages';
import TermsAndConditionsModal from '../components/TermsAndConditions';
import Button from '../components/Button';
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
  const [shouldDisplayLoadingScreen, setLoadingScreen] = useState(false); // eslint-disable-line
  const [images, setImages] = useState([]);

  let containerMessage = selectImagesMessage;

  if (selectedImages) containerMessage = selectedImagesMessage;
  return (
    <Layout>
      <div className="Flex">
        <section className="Flex SelectImages">
          <SelectOrDragImage 
            setSelectedImages={setSelectedImages}
            containerMessage={containerMessage}
            setNotCompliantImages={setNotCompliantImages}
            setImages={setImages}
            images={images}
          />
        </section>
        <section className="Flex HomeSection">
          <article className="Flex HomeArticle">
            <h1 style={{marginTop: '2%'}}>Acerca de este sitio</h1>
            <p style={{width: '95%', marginTop: '3%', textAlign: 'justify'}}>{initialMessage}</p>
            <section className="Flex HomeButtons">
              <Button classes='SmallButton' message='LIMPIAR' action={() => clearImageComponentState(setSelectedImages, setImages)} />
              <Button classes='SmallButton' message='PREDECIR' action={() => checkOpenTermsAndConditions(images, shouldDisplayNotCompliantImages, setOpenTermsAndConditions, setNotCompliantImages)} />
            </section>
          </article>
        </section>
      </div>
      { shouldOpenTermsAndConditions ? 
        <TermsAndConditionsModal 
          closeModal={setOpenTermsAndConditions}
        /> : 
        null }
      { shouldDisplayNotCompliantImages ? 
        <NotAcceptedImagesModal closeModal={setNotCompliantImages} /> : 
        null }
      {
        shouldDisplayLoadingScreen ?
          <div>Loading!</div> :
          null
      }
    </Layout>
  );
}