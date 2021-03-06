import axios from "axios";

import apiConfig from "../config/api.config";

const { apiEndpoint } = apiConfig;

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
