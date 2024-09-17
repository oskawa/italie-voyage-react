import axios from "axios";

const http = axios.create({
  baseURL: 'https://voyageapi.maxime-eloir.fr/wp-json/voyage-api/v1/',
})

export default http