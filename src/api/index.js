export const getDataFromAPI = async (endpoint = '') => {
  const baseUrl = 'https://rickandmortyapi.com/api'
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`)
    return await response.json()
  } catch (error) {
    console.log(`[getDataFromAPI] error: ${error.message}`)
  }
}

export const getAPICharacters = async (action) => {
  console.log({ action })
  const URL = 'https://rickandmortyapi.com/api/character'
  try {
    const response = await fetch(URL)
    return await response.json()
  } catch (error) {
    console.log(`[getAPICharacters] error: ${error.message}`)
  }
}

export const getAPIEpisodes = async () => {
  const URL = 'https://rickandmortyapi.com/api/episode'
  try {
    const response = await fetch(URL)
    return await response.json()
  } catch (error) {
    console.log(`[getAPIEpisodes] error: ${error.message}`)
  }
}
