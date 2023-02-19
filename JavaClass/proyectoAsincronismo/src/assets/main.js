const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=9';
const $vid_container = document.querySelector('#vid-container')
const $vid_thumbnail = document.querySelector('#vid-thumbnail')


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
    let items = data.items
    let texto = ''
    items.forEach((item) => {
        Object.entries(item).map((entry, index, arr) => {
            const [key, value] = entry
            if(key === 'snippet') {
                // texto += `<p>${value.description}</p>`
                console.log(value)
                texto += `
                    <div class="card">
                        <picture id="vid-thumbnail">
                            <img src="${value.thumbnails.high.url}" alt="">
                        </picture>
                        <div class="card-content">
                            <h3>${value.title}</h3>
                            <p>${value.description}</p>
                        </div>
                    </div>
`
            }
        })
    })
    $vid_container.innerHTML = texto
    // $vid_thumbnail.innerHTML = texto
}

recorrido(API)
