import React from 'react';
import Layout from '../containers/Layout';
import InformativePage from '../containers/InformativePage';
import { useLocation, useHistory } from 'react-router-dom';
import { message } from '../data/predictions_disclaimer.json';
import '../styles/predictionResults.css';

const renderPredictions = (predictions) => predictions.map(prediction => {
  return (
    <article key={prediction.file.lastModified} className='Flex PredictedItem'>
      <img className='PredictedImage' alt={prediction.file.name} src={window.URL.createObjectURL(prediction.file)} />
      <h1 className='MarginTop'>Resultado</h1>
      <p className='PredictionText'>Se estima con una certeza del {prediction.percentage} que esta imágen corresponde al tipo de galaxia {prediction.predictedType}</p>
    </article>
  );
});

export default function PredictionResults() {
  const location = useLocation();
  const history = useHistory();

  if (!location.state) history.push('/');

  return (
    <Layout>
      <InformativePage title='PREDICCIONES'>
        <div className='Flex PredictedImagesContainer'>
          <div className='Flex PredictedImages'>
            {renderPredictions(location.state.predictions)}
          </div>
          <section className='Flex AboutPredictions'>
            <article className='MarginLeft MarginRight'>
              <h1>Sobre las predicciones</h1>
              <p style={{textAlign: 'justify', width: '95%', marginTop: '3%'}}>{message}</p>
            </article>
          </section>
        </div>
      </InformativePage>
    </Layout>
  );
}