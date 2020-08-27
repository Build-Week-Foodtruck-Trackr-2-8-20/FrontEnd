import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken"); // getting token and saving to local storage
  console.log(token);

  return axios.create({
    headers: {
      Authorization: token
    }
  });
}