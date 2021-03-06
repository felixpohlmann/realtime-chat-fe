import axios from "axios";

import apiConfig from "../config/api.config";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? apiConfig.apiEnpointProduction
    : apiConfig.apiEnpointLocal;

function storeMessage(content, username) {
  axios.post(`${apiEndpoint}/messages`, {
    content,
    username,
  });
}

async function getMessages() {
  const result = await axios.get(`${apiEndpoint}/messages`);
  return result.data;
}

export default { storeMessage, getMessages };
