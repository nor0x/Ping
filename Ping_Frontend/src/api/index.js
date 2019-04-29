import axios from "axios";

export const API_BASE_URL = "http://pinghack.azurewebsites.net/api/Ping";

// 1. typing address
// 2. Generate lat, lng in front
// 3. send data to backend (lat, lng)

export function addPing(payload) {
  return axios.post(API_BASE_URL, payload)
}
