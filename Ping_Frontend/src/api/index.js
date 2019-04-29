const API_BASE_URL = "http://pinghack.azurewebsites.net/api/Ping";

export const getPings = async () => {
  const response = await fetch(API_BASE_URL);

  return response.json();
};

export const getPingById = async id => {
  const response = await fetch(`${API_BASE_URL}/${id}`);

  return response.json();
};
