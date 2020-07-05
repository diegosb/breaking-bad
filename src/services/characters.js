const baseUrl = 'https://www.breakingbadapi.com/api'

export const getAllCharacters = `${baseUrl}/characters`

export const getCharacter = (id) => `${baseUrl}/characters/${id}`

export const getCharacterByName = (name) => `${baseUrl}/characters?name=${name}`

const DEFAULT_MAX_RESULTS = 10

export const getPaginatedCharacters = (offset, maxResults = DEFAULT_MAX_RESULTS) =>
  `${baseUrl}/characters?limit=${maxResults}&offset=${offset}`
