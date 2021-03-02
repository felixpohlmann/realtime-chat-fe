import axios from "axios";

import apiConfig from "../config/api.config";

function storeMessage(message) {
  axios.post(`${apiConfig.apiEnpointLocal}/messages`, { content: message });
}

async function getMessages() {
  const result = await axios.get(`${apiConfig.apiEnpointLocal}/messages`);
  return result.data;
}

export default { storeMessage, getMessages };
