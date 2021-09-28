import axios from "axios";

const options = {
  method: "POST",
  url: "https://forex10.p.rapidapi.com/latest",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "forex10.p.rapidapi.com",
    "x-rapidapi-key": "2e73b36f50mshb59795647277647p18c068jsnd351c5df5403",
  },
  data: { id: "1,2,3" },
};

export const fetchNews = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
