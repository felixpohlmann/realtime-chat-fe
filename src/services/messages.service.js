import axios from "axios";

import apiConfig from "../config/api.config";

function storeMessage(content, username) {
  axios.post(`${apiConfig.apiEnpointLocal}/messages`, {
    content,
    username,
  });
}

async function getMessages() {
  const result = await axios.get(`${apiConfig.apiEnpointLocal}/messages`);
  return result.data;
}

export default { storeMessage, getMessages };
