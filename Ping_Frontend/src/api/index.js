import axios from "axios";

export const API_BASE_URL = "https://pinghack.azurewebsites.net/api/Ping";
export const API_HEATMAP_URL = "https://pinghack.azurewebsites.net/api/Heatmap";

export function addPing(payload) {
  return axios.post(API_BASE_URL, payload);
}

export function changeStatusOfPing({ id, status }) {
  return axios.put(`${API_BASE_URL}/${id}/${status}`);
}
