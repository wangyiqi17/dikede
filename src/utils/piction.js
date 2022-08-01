import axios from 'axios'

const requestarr = axios.create({
  baseURL: 'https://likede2-java.itheima.net/'
})
export default requestarr
