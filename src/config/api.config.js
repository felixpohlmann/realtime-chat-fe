const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? "https://realtime-chat-be.herokuapp.com"
    : "http://localhost:5000";

export default {
  apiEndpoint,
};
