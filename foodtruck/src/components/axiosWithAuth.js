import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    baseURL: "https://food-truck-lambda.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};