export async function fetchAPI(ingredient: string) {
  // * For Static file
  // const url = '../../notes/response.json';

  // * API Settings
  const url = `https://recipe-finder-backend-production.up.railway.app/api?name=${ingredient}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      } else {
        throw new Error('API request failed.');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error}`);
    throw error;
  }
}
