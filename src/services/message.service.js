import axios from "axios";

async function storeMessage(message) {
  axios.post("http://localhost:5000/messages", { content: message });
}

export default { storeMessage };
