import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }

      throw new Error('Não foi possível localizar os dados:(');
    });
}

export default {
  getAllWithVideos,
};
