import axios from "axios";

export const apiKey = "api_key=9b7b74f5cba4cdb90eb73f93aaa30479";

export const quackApi = axios.create({
  baseURL: "https://capstone-api-m3.herokuapp.com",
});

export const moviesAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
