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
    return apiClient.post("/register", user);
  },
};
