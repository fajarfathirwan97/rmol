'use strict'

import apisauce from 'apisauce'

const KEYS = { APP_ID: 'X-Mesosfer-Application-id', MASTER_KEY: 'X-Mesosfer-Master-Key', CLIENT_KEY: 'X-Mesosfer-Client-Key' }
const BASE_URL = 'https://api.apigo.id/2'
const HALO_URL = 'http://halogolfclub.id'
const API_URL = 'http://103.252.51.213/2'
let HEADERS = { 'Content-type': 'application/json', [KEYS.APP_ID]: 'XL3rQjj', [KEYS.MASTER_KEY]: '8dj2NNuQVcxmDtaUN10FRWcWbGW1vw0O', [KEYS.CLIENT_KEY]: '8dj2NNuQVcxmDtaUN10FRWcWbGW1vw0O' }
const TIMEOUT_REQUEST = 1000 * (5)

const create = () => {
  const api = apisauce.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_REQUEST,
    headers: HEADERS
  })
  const getHomeNews = () => api.get(`/classes/${className}`, queryParam)

  return {
    getHomeNews
  }

}
export default {
  create
}
