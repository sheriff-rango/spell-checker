const axios = require('axios')

const BASE_URL = 'https://spell-check-app-server.herokuapp.com/spellcheck'

export interface ErrorResponse {
  msg: string
}

export interface SuccessResponse {
  suggestions: string[]
  correct: boolean
}

function fetch({ method, url, headers, data }: { method?: string; url: string; headers?: any; data?: any }) {
  return axios({
    method: (method || 'get').toLowerCase(),
    url: url,
    headers: headers || {
      Accept: 'application/vnd.github.v3+json',
    },
    data,
  })
}

export async function checkWord(searchWord): Promise<SuccessResponse | ErrorResponse | null> {
  try {
    const result = await fetch({ url: `${BASE_URL}/${searchWord}` })
    console.log(result.data)
    return result.data
  } catch (err) {
    console.log('axios error', err)
    return null
  }
}
