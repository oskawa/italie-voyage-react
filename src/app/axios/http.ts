import axios from "axios";
import https from "https";

const http = axios.create({
  baseURL: 'https://voyageapi.maxime-eloir.fr/wp-json/voyage-api/v1/',
 
})

export default http