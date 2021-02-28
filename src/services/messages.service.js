import axios from "axios";

function storeMessage(message) {
  axios.post("http://192.168.178.35:5000/messages", { content: message });
}

async function getMessages() {
  const result = await axios.get("http://192.168.178.35:5000/messages");
  return result.data;
}

export default { storeMessage, getMessages };
