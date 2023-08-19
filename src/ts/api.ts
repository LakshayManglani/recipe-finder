export async function fetchAPI(ingredient: string) {
  // * For Static file
  // const url = '../../notes/response.json';

  // * API Settings
  const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${ingredient}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c854b6e902msh3a5a404a2c7fe1ep103aa1jsn8e727021425b',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);

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
