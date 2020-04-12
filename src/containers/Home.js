import React, { useState } from 'react';
import Layout from './Layout';
import SelectOrDragImage from '../components/SelectOrDragImage';
import NotAcceptedImagesModal from '../components/NotAcceptedImages';
import TermsAndConditionsModal from '../components/TermsAndConditions';
import ErrorInRequestModal from '../components/Error';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Button from '../components/Button';
import '../styles/home.css';
import { initialMessage, selectImagesMessage, selectedImagesMessage } from '../media/strings.json';

export default function Home() {
  const [selectedImages, setSelectedImages] = useState(false);
  const [shouldOpenTermsAndConditions, setOpenTermsAndConditions] = useState(false);
  const [shouldDisplayNotCompliantImages, setNotCompliantImages] = useState(false);
  const [shouldOpenErrorInRequestModal, setOpenErrorInRequestModal] = useState(false)
  const [shouldDisplayLoadingScreen, setLoadingScreen] = useState(false); // eslint-disable-line
  const [images, setImages] = useState([]);

  const clearImageState = () => {
    setSelectedImages(false);
    setImages([]);
    document.getElementById('SelectImageForm').reset();
  };

  const openTermsAndConditions = () => {
    if (shouldDisplayNotCompliantImages) return;
    if (!images.length) {
      setNotCompliantImages(true);
      return;
    }
    setOpenTermsAndConditions(true);
  };

  const fetchPrediction = async () => {
    setOpenTermsAndConditions(false);
    setLoadingScreen(true);
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          setLoadingScreen(false);
          resolve(<Link to='/about' />);
        }, 3000); 
      });
    } catch (error) {
      setLoadingScreen(false);
      setOpenErrorInRequestModal(true);
    }
  };

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
              <Button classes='SmallButton' message='LIMPIAR' action={clearImageState} />
              <Button classes='SmallButton' message='PREDECIR' action={openTermsAndConditions} />
            </section>
          </article>
        </section>
      </div>
      { shouldOpenTermsAndConditions ? 
        <TermsAndConditionsModal 
          closeModal={setOpenTermsAndConditions}
          fetchPrediction={fetchPrediction}
        /> : 
        null }
      { shouldDisplayNotCompliantImages ? 
        <NotAcceptedImagesModal closeModal={setNotCompliantImages} /> : 
        null }
      { shouldDisplayLoadingScreen ?
        <Loader color='#1A237E' loaderType='ball-scale-multiple' /> :
        null }
      { shouldOpenErrorInRequestModal ?
        <ErrorInRequestModal closeModal={setOpenErrorInRequestModal} /> :
        null }
    </Layout>
  );
}