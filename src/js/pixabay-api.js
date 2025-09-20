import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: "52388349-b652c0030e98c4b6e488e9cd6",
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  });
  return response.data;
}
