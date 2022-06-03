export const API = () => {
 const baseURL = process.env.REACT_APP_SERVER_URL ||
    "https://dumbsound-khairien.herokuapp.com/api/v1" ||
    "http://localhost:5000/api/v1";

  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseURL + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};