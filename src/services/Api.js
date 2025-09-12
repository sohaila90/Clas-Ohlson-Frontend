import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get("/users");
  },
  addUser(user) {
    return apiClient.post("/users/register", user);
  },
  getUserInfo(loginInfo) {
    return apiClient.post("/users/login", loginInfo);
  },
  getProducts() {
    return apiClient.get("/products");
  },
};
