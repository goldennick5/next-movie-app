import { ACCESS_TOKEN, BASE_URL } from "@/constants/api";

import axios from "axios";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default apiClient;
