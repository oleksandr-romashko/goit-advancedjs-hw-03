import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_EplPvU7ci3YavzCPFlo4YRRLRcifpeQ1TyzYFroY589Dsj1Bw8eyTsvrcJ5pS5A5';

export async function fetchBreeds() {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds');
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  return response.data;
}
