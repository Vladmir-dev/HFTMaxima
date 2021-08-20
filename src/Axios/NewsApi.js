import axios from "axios";
import { requests } from "./Apis";
const api = axios.create({
  baseURL: "https://newsdata.io/api/1",
});

export const fetchNews = async() => {
  try {
    const { data } = await api.get(requests.news);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
