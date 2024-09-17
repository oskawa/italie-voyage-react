import axios from "axios";
import https from "https";

const http = axios.create({
  baseURL: 'https://voyageapi.maxime-eloir.fr/wp-json/voyage-api/v1/',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Ignore self-signed certs
  }),
})

export default http