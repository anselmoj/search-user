import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.github.com/users',
})

export default httpClient
