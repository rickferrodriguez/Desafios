const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=9';


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

const recorrido = async (url) => {
    let data = await fetchData(url)
    console.log(data)
}

recorrido(API)
