import React, { useState } from 'react';
import PropTypes from 'prop-types';

const acceptedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

function preventDefaults(event) {
  event.preventDefault();
  event.stopPropagation();
}

function addHighlight(event) {
  preventDefaults(event);
  document.getElementById('Draggeable').classList.add('highlight');
}

function removeHighlight(event) {
  preventDefaults(event);
  document.getElementById('Draggeable').classList.remove('highlight');
}

function getDraggedImages(event, setSelectedImage, setNotCompliantImages, setImages) {
  removeHighlight(event);
  const { dataTransfer: { files } } = event;
  const compliant = checkFilesCompliance(files);

  if (compliant) {
    setSelectedImage(true);
    setImages(compliant);
  } else {
    setNotCompliantImages(true);
  }
}

function getFileExplorerImages(event, setSelectedImage, setNotCompliantImages, setImages) {
  const { target: { files } } = event;
  const compliant = checkFilesCompliance(files);

  if (compliant) {
    setSelectedImage(true);
    setImages(compliant);
  } else {
    setNotCompliantImages(true);
  }
}

function checkFilesCompliance(files) {
  const filesAsArray = Array.from(files).slice(0, 3);

  if (filesAsArray.length < 3) {
    return false;
  }

  const notCompliantElement = filesAsArray.map(item => item.type).find(type => !acceptedTypes.includes(type));
  if (notCompliantElement) return false;

  return filesAsArray;
}

const renderImages = (images) => images.map(image => (<img key={image.lastModified} className='SelectedImage' src={window.URL.createObjectURL(image)} />))

export default function SelectOrDragImage(props) {
  return (
    <div
      onDragEnter={(event) => addHighlight(event)}
      onDragLeave={(event) => removeHighlight(event)}
      onDragOver={(event) => addHighlight(event)}
      onDrop={(event) => getDraggedImages(event, props.setSelectedImages, props.setNotCompliantImages, props.setImages)}
      className="SelectedImageContainer"
      id="Draggeable"
    >
      <form id="SelectImageForm" className="SelectImageForm">
        <label>{props.containerMessage}</label>
        <input 
          onChange={(event) => getFileExplorerImages(event, props.setSelectedImages, props.setNotCompliantImages, props.setImages)} 
          multiple 
          type="file" 
          accept="image/png, image/jpeg, image/jpg"
        />
      </form>
      { props.images.length ? 
        <div className="animated fadeIn SelectedImagesContainer">{renderImages(props.images)}</div> : 
        null 
      }
    </div>
  );
}

SelectOrDragImage.propTypes = {
  shouldClearImages: PropTypes.bool,
  resetClearImages: PropTypes.func,
  fileManager: PropTypes.func,
};