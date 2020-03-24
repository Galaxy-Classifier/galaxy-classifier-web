import React, { useState } from 'react';

const onDragEnter = () => document.getElementById('Draggeable').classList.add('highlight');
const onDragOver = () => document.getElementById('Draggeable').classList.add('highlight');
const onDragLeave = () => document.getElementById('Draggeable').classList.remove('highlight');

function onDrop(event) {
  document.getElementById('Draggeable').classList.remove('highlight');
  handleFiles(event);
}

function preventDefaults(event) {
  event.preventDefault();
  event.stopPropagation();
}

function executor(event, handler, hookChange) {
  preventDefaults(event);
  if (hookChange) hookChange(true);
  return handler(event);
}

function handleFiles(event) {
  const { dataTransfer, target } = event;
  const files = (dataTransfer && dataTransfer.files) || (target && target.files);
  console.log(files);
}

export default function SelectOrDragImage() {
  const [droppedImages, setDropped] = useState(false);
  let message = 'Arrastre o seleccione hasta tres imágenes.';
  if (droppedImages) message = 'Revise sus imágenes antes de continuar.';
  return (
    <div
      onDragEnter={(event) => executor(event, onDragEnter)}
      onDragLeave={(event) => executor(event, onDragLeave)}
      onDragOver={(event) => executor(event, onDragOver)}
      onDrop={(event) => executor(event, onDrop, setDropped)}
      className="SelectedImageContainer"
      id="Draggeable"
    >
      <form className="SelectImageForm">
        <label>{message}</label>
        <input onChange={(event) => handleFiles(event)} multiple type="file" accept="image/png, image/jpeg, image/jpg"/>
        <img />
        <img />
        <img />
      </form>
    </div>
  );
}