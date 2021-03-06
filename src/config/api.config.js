const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? apiConfig.apiEnpointProduction
    : apiConfig.apiEnpointLocal;

export default {
  apiEndpoint,
};
