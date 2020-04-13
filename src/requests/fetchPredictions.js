import axios from 'axios'; // eslint-disable-line

export default async function fetchPrediction(files) {
  //const formData = new FormData();
  //for (const file of files) {
  //  formData.append(file.name, file);
  //}

  return new Promise((resolve) => { // eslint-disable-line
    setTimeout(() => {
      resolve(files.map(file => ({ file, predictedType: 'Lenticular', percentage: '90%' })));
    }, 3000);
  });
  // return await axios.post(
  //     process.env.REACT_APP_FETCH_PREDICTIONS_ENDPOINT, 
  //     formData,
  //     { headers: { 'Content-Type': 'multipart/form-data' } }
  //   );
}